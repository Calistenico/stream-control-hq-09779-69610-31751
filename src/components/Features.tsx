const Features = () => {
  const drmFeatures = [
    { title: "Extrator Próprio", desc: "Capture canais de múltiplos provedores" },
    { title: "~470 Canais", desc: "Claro, SKY, PlayPlus, Globoplay + abertos" },
    { title: "Painel Admin", desc: "Controle total de conexões e usuários" },
    { title: "Logs Detalhados", desc: "Monitoramento completo do sistema" },
    { title: "Desenhos 24h", desc: "Canal infantil com programação contínua" },
    { title: "Atualizações", desc: "Sistema atualizado automaticamente" }
  ];

  const vodFeatures = [
    { title: "Top 10 Automático", desc: "Ranking dos mais assistidos em tempo real" },
    { title: "Notificações Telegram", desc: "Envie banners e avisos para grupos" },
    { title: "Cache Inteligente", desc: "Sistema proxy otimizado para performance" },
    { title: "Integração TMDB", desc: "Metadados e capas atualizadas" },
    { title: "Painel de Gestão", desc: "Gerencie toda biblioteca facilmente" },
    { title: "API Completa", desc: "Integração com apps e sistemas" }
  ];

  return (
    <section className="py-20 px-4 bg-card/30 backdrop-blur">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Funcionalidades <span className="gradient-text">técnicas</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sistemas profissionais com recursos avançados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* DRM OTT Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="text-2xl font-bold">DRM OTT V4</h3>
            </div>
            <div className="grid gap-4">
              {drmFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="font-semibold text-primary mb-1">{feature.title}</div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VOD Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold">Sistema VOD</h3>
            </div>
            <div className="grid gap-4">
              {vodFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="font-semibold text-primary mb-1">{feature.title}</div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔗</div>
            <h4 className="font-bold mb-2">Integração Completa</h4>
            <p className="text-sm text-muted-foreground">
              DRM e VOD trabalham juntos perfeitamente
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold mb-2">Métricas em Tempo Real</h4>
            <p className="text-sm text-muted-foreground">
              Visualize conexões, views e performance
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-bold mb-2">Segurança Avançada</h4>
            <p className="text-sm text-muted-foreground">
              Proteção contra pirataria e uso indevido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
