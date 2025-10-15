import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
            Sistemas Próprios • Estabilidade Garantida
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Assuma o controle do seu negócio de{" "}
            <span className="gradient-text">streaming</span> — estabilidade e lucro com sistemas próprios
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para donos de servidores IPTV: DRM OTT V4, Sistema de VOD, Combo Patrão e montagem de servidores prontos.
          </p>

          {/* Pricing Bar */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg px-6 py-3">
              <div className="text-sm text-muted-foreground">DRM OTT V4</div>
              <div className="text-2xl font-bold text-primary">R$ 1.800</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg px-6 py-3">
              <div className="text-sm text-muted-foreground">Sistema VOD</div>
              <div className="text-2xl font-bold text-primary">R$ 1.100</div>
            </div>
            <div className="bg-card/50 backdrop-blur border border-primary rounded-lg px-6 py-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-xs px-2 py-1 text-white">MELHOR</div>
              <div className="text-sm text-muted-foreground">Combo Patrão</div>
              <div className="text-2xl font-bold gradient-text">R$ 2.500</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg h-12 sm:h-14 px-4 sm:px-8"
              asChild
            >
              <a href="https://wa.me/5544991082160?text=Olá!%20Tenho%20interesse%20no%20DRM%20OTT%20V4%20(R$1.800)." target="_blank" rel="noopener noreferrer">
                DRM OTT V4 — R$ 1.800
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 font-bold text-base sm:text-lg h-12 sm:h-14 px-4 sm:px-8"
              asChild
            >
              <a href="https://wa.me/5544991082160?text=Olá!%20Tenho%20interesse%20no%20Sistema%20de%20VOD%20(R$1.100)." target="_blank" rel="noopener noreferrer">
                Sistema VOD — R$ 1.100
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-base sm:text-lg h-12 sm:h-14 px-4 sm:px-8"
              asChild
            >
              <a href="https://wa.me/5544991082160?text=Olá!%20Quero%20o%20Combo%20Patrão%20(DRM%20OTT%20V4%20+%20VOD%20+%20Instalação%20e%20Suporte)." target="_blank" rel="noopener noreferrer">
                Combo Patrão — R$ 2.500
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Instalação Completa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Suporte Técnico</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Sistemas Próprios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
