import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import mpegts from "mpegts.js";

const QualityShowcase = () => {
  const targetUrl = "http://187.120.222.37:721";
  const functionBase = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.functions.supabase.co/proxy-stream`;
  const channelUrl = `${functionBase}?url=${encodeURIComponent(targetUrl)}`;
  const isHls = targetUrl.endsWith(".m3u8");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!videoRef.current) return;

    let cleanupFn: (() => void) | null = null;

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
        cleanupFn = () => { hls.destroy(); };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = channelUrl;
        const onLoad = () => videoRef.current?.play();
        videoRef.current.addEventListener('loadedmetadata', onLoad);
        cleanupFn = () => videoRef.current?.removeEventListener('loadedmetadata', onLoad);
      }
    } else {
      // Stream .ts com mpegts.js - reload apenas quando terminar
      if (mpegts.isSupported()) {
        let player: any = null;
        let isDestroyed = false;
        let isReloading = false;

        const createPlayer = () => {
          if (isDestroyed || !videoRef.current || isReloading) return;

          console.log('Criando player mpegts.js');

          player = mpegts.createPlayer(
            {
              type: 'mpegts',
              isLive: true,
              url: channelUrl,
              withCredentials: false,
              hasAudio: false,
              hasVideo: true,
            },
            {
              enableWorker: true,
              enableStashBuffer: false,
              stashInitialSize: 128,
              autoCleanupSourceBuffer: true,
              liveBufferLatencyChasing: true,
              liveBufferLatencyMaxLatency: 1.5,
              liveBufferLatencyMinRemain: 0.3,
              isLive: true,
              lazyLoad: false,
              deferLoadAfterSourceOpen: false,
            }
          );

          player.attachMediaElement(videoRef.current);
          player.load();
          
          // Aguardar o buffer estar pronto antes de dar play
          videoRef.current.addEventListener('loadedmetadata', () => {
            player.play().catch((e: any) => console.log('Play error:', e));
          }, { once: true });

          // Tratar erros e reconectar automaticamente
          player.on(mpegts.Events.ERROR, (errorType: any, errorDetail: any) => {
            console.error('Erro no player:', errorType, errorDetail);
            if (errorType === mpegts.ErrorTypes.NETWORK_ERROR || errorType === mpegts.ErrorTypes.MEDIA_ERROR) {
              console.log('Reconectando em 2 segundos...');
              setTimeout(() => {
                if (!isDestroyed && player) {
                  player.unload();
                  player.load();
                }
              }, 2000);
            }
          });
        };

        createPlayer();

        cleanupFn = () => {
          isDestroyed = true;
          if (player) {
            try {
              player.pause();
              player.unload();
              player.detachMediaElement();
              player.destroy();
            } catch (e) {
              console.error('Erro ao limpar player:', e);
            }
          }
        };
      } else {
        // Fallback para navegadores sem suporte a MSE
        console.log('mpegts.js não suportado, usando player nativo');
        videoRef.current.src = channelUrl;
        const onLoad = () => videoRef.current?.play().catch(e => console.log('Play error:', e));
        videoRef.current.addEventListener('loadedmetadata', onLoad);
        cleanupFn = () => videoRef.current?.removeEventListener('loadedmetadata', onLoad);
      }
    }

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [channelUrl, isHls, reloadCount]);

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
              controls
              autoPlay
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
