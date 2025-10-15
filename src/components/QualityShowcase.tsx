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
      // .ts via mpegts.js - Stream contínuo com reload automático
      if (mpegts.isSupported()) {
        let player: any = null;
        let isDestroyed = false;

        const initPlayer = () => {
          if (isDestroyed || !videoRef.current) return;

          player = mpegts.createPlayer(
            {
              type: 'mpegts',
              isLive: true,
              url: channelUrl,
              withCredentials: false,
            },
            {
              enableWorker: true,
              enableStashBuffer: true,
              stashInitialSize: 512,
              liveBufferLatencyChasing: false,
              autoCleanupSourceBuffer: true,
              autoCleanupMaxBackwardDuration: 20,
              autoCleanupMinBackwardDuration: 10,
            }
          );
          
          player.on(mpegts.Events.ERROR, (errorType: any, errorDetail: any) => {
            console.error('MPEGTS Error:', errorType, errorDetail);
            if (!isDestroyed) {
              setTimeout(() => {
                if (player && !isDestroyed) {
                  player.unload();
                  player.load();
                  player.play();
                }
              }, 1000);
            }
          });

          // Detectar quando o stream "termina" e recarregar
          const handleEnded = () => {
            console.log('Stream ended, reloading...');
            if (!isDestroyed && player) {
              setTimeout(() => {
                if (!isDestroyed && videoRef.current) {
                  player.unload();
                  player.load();
                  player.play();
                }
              }, 500);
            }
          };

          if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleEnded);
            player.attachMediaElement(videoRef.current);
            player.load();
            player.play();
          }
        };

        initPlayer();
        
        return () => {
          isDestroyed = true;
          if (player) {
            try {
              player.pause();
              player.unload();
              player.detachMediaElement();
              player.destroy();
            } catch (e) {
              console.error('Error destroying player:', e);
            }
          }
        };
      } else {
        // Fallback: reprodução nativa com reload
        const handleEnded = () => {
          if (videoRef.current) {
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.load();
                videoRef.current.play();
              }
            }, 500);
          }
        };

        videoRef.current.src = channelUrl;
        videoRef.current.addEventListener('ended', handleEnded);
        const onLoad = () => videoRef.current?.play();
        videoRef.current.addEventListener('loadedmetadata', onLoad);
        
        return () => {
          if (videoRef.current) {
            videoRef.current.removeEventListener('ended', handleEnded);
            videoRef.current.removeEventListener('loadedmetadata', onLoad);
          }
        };
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
