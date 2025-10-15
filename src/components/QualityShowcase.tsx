import { useEffect, useRef } from "react";
import Hls from "hls.js";
import mpegts from "mpegts.js";

const QualityShowcase = () => {
  const targetUrl = "http://cdn60.vip:80/vek28353/vrb36258/121121.ts";
  const functionBase = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.functions.supabase.co/proxy-stream`;
  const channelUrl = `${functionBase}?url=${encodeURIComponent(targetUrl)}`;
  const isHls = targetUrl.endsWith(".m3u8");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isHls) {
      if (Hls.isSupported()) {
        const hls = new Hls({ 
          enableWorker: true, 
          lowLatencyMode: false,
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          backBufferLength: 10,
        });
        hls.loadSource(channelUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => videoRef.current?.play());
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error('HLS Fatal Error:', data);
            setTimeout(() => {
              hls.destroy();
              hls.loadSource(channelUrl);
              hls.attachMedia(videoRef.current!);
            }, 1000);
          }
        });
        return () => { hls.destroy(); };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = channelUrl;
        const onLoad = () => videoRef.current?.play();
        videoRef.current.addEventListener('loadedmetadata', onLoad);
        return () => videoRef.current?.removeEventListener('loadedmetadata', onLoad);
      }
    } else {
      // .ts via mpegts.js com configurações otimizadas
      if (mpegts.isSupported()) {
        const player = mpegts.createPlayer(
          {
            type: 'mpegts',
            isLive: true,
            url: channelUrl,
            withCredentials: false,
          },
          {
            enableWorker: true,
            enableStashBuffer: true,
            stashInitialSize: 384,
            liveBufferLatencyChasing: false,
            liveBufferLatencyMaxLatency: 3,
            liveBufferLatencyMinRemain: 0.5,
            autoCleanupSourceBuffer: true,
            autoCleanupMaxBackwardDuration: 30,
            autoCleanupMinBackwardDuration: 15,
          }
        );
        
        player.on(mpegts.Events.ERROR, (errorType, errorDetail, errorInfo) => {
          console.error('MPEGTS Error:', errorType, errorDetail, errorInfo);
          if (errorType === mpegts.ErrorTypes.NETWORK_ERROR) {
            setTimeout(() => {
              player.unload();
              player.load();
              player.play();
            }, 2000);
          }
        });

        player.attachMediaElement(videoRef.current);
        player.load();
        player.play();
        
        return () => {
          player.pause();
          player.unload();
          player.detachMediaElement();
          player.destroy();
        };
      } else {
        // Fallback: reprodução nativa
        videoRef.current.src = channelUrl;
        const onLoad = () => videoRef.current?.play();
        videoRef.current.addEventListener('loadedmetadata', onLoad);
        return () => videoRef.current?.removeEventListener('loadedmetadata', onLoad);
      }
    }
  }, [channelUrl, isHls]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja nossa <span className="gradient-text">qualidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transmissão em alta definição, sem travamentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              src={channelUrl}
              controls
              muted
              playsInline
              className="w-full h-full"
            />
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-card/50">
              <div className="text-3xl mb-2">🎬</div>
              <h3 className="font-semibold mb-2">Qualidade HD/4K</h3>
              <p className="text-sm text-muted-foreground">
                Imagens cristalinas em alta definição
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Sem Travamentos</h3>
              <p className="text-sm text-muted-foreground">
                Streaming estável e confiável
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50">
              <div className="text-3xl mb-2">📺</div>
              <h3 className="font-semibold mb-2">Canais Premium</h3>
              <p className="text-sm text-muted-foreground">
                Milhares de opções disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityShowcase;
