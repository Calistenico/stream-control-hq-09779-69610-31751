// Proxy HTTPS para streams HTTP (.m3u8, .ts) com suporte a Range
// e CORS habilitado para uso direto no <video>

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, range",
  "Access-Control-Expose-Headers": "content-length, content-type, accept-ranges, content-range",
};

function inferContentType(url: string, fallback?: string) {
  if (url.endsWith(".m3u8")) return "application/vnd.apple.mpegurl";
  if (url.endsWith(".ts")) return "video/mp2t";
  return fallback || "application/octet-stream";
}

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response("Missing 'url' query param", { status: 400, headers: corsHeaders });
  }

  // Segurança mínima: somente http/https e tamanho razoável
  try {
    const u = new URL(target);
    if (!/^https?:$/.test(u.protocol)) {
      return new Response("Only HTTP/HTTPS allowed", { status: 400, headers: corsHeaders });
    }
  } catch {
    return new Response("Invalid URL", { status: 400, headers: corsHeaders });
  }

  // Encaminhar cabeçalhos essenciais (Range, UA, Accept, Referer, Origin, Language)
  const fwdHeaders = new Headers();
  const rangeHeader = req.headers.get("range");
  if (rangeHeader) fwdHeaders.set("range", rangeHeader);
  fwdHeaders.set("user-agent", req.headers.get("user-agent") || "Mozilla/5.0");
  fwdHeaders.set("accept", req.headers.get("accept") || "*/*");
  const referer = req.headers.get("referer");
  if (referer) fwdHeaders.set("referer", referer);
  const origin = req.headers.get("origin");
  if (origin) fwdHeaders.set("origin", origin);
  const acceptLanguage = req.headers.get("accept-language");
  if (acceptLanguage) fwdHeaders.set("accept-language", acceptLanguage);
  const cacheControl = req.headers.get("cache-control");
  if (cacheControl) fwdHeaders.set("cache-control", cacheControl);
  console.log("proxy-stream: fetching", target, "range:", rangeHeader || "none");

  try {
    const upstream = await fetch(target, { headers: fwdHeaders, redirect: "follow" });

    // Copiar cabeçalhos relevantes
    const headers = new Headers(upstream.headers);
    // Forçar CORS
    Object.entries(corsHeaders).forEach(([k, v]) => headers.set(k, v));

    // Garantir content-type adequado quando ausente
    if (!headers.get("content-type")) {
      headers.set("content-type", inferContentType(target));
    }
    // Garantir Accept-Ranges para seek quando ausente
    if (!headers.get("accept-ranges")) {
      headers.set("accept-ranges", "bytes");
    }

    // Passar streaming body diretamente
    return new Response(upstream.body, {
      status: upstream.status,
      headers,
    });
  } catch (e) {
    return new Response(`Proxy error: ${e instanceof Error ? e.message : String(e)}` , {
      status: 502,
      headers: corsHeaders,
    });
  }
});
