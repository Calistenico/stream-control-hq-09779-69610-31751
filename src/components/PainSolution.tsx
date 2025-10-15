const PainSolution = () => {
  return (
    <section className="py-20 px-4 bg-card/30 backdrop-blur">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pain */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-destructive/20 border border-destructive/30 rounded-full text-destructive font-semibold text-sm">
              ⚠️ O Problema
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Cansado de fontes alugadas, instabilidade e custos altos?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Fontes alugadas que travam constantemente e derrubam sua receita</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Instabilidades de terceiros que você não controla</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Pagando caro por poucas conexões e atualizações rareadas</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-destructive mt-1">✗</span>
                <span>Sem controle sobre seu próprio negócio</span>
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6 animate-fade-in gradient-border p-8">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold text-sm">
              ✓ A Solução
            </div>
            <h3 className="text-2xl md:text-4xl font-bold gradient-text">
              Recupere controle, estabilidade e lucro
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>DRM OTT V4:</strong> Sua própria fonte de canais com extrator e ~470 canais estáveis</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sistema VOD:</strong> Biblioteca completa de filmes e séries com cache inteligente</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Combo Patrão:</strong> DRM + VOD + Instalação + Suporte = Solução completa</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Controle total sobre conexões, conteúdo e faturamento</span>
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="#produtos" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Ver Produtos
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
