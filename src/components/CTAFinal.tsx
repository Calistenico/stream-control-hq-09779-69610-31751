import { Button } from "@/components/ui/button";

const CTAFinal = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold">
          Pronto para dominar seu próprio{" "}
          <span className="gradient-text">servidor IPTV?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fale agora com nossos especialistas e comece a lucrar com estabilidade e controle total.
        </p>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white font-bold text-xl h-16 px-12 shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a 
            href="https://wa.me/5544991082160?text=Olá!%20Quero%20começar%20meu%20projeto%20de%20servidor%20IPTV!" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Começar Meu Projeto Agora
          </a>
        </Button>

        <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Resposta Rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Suporte Especializado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Instalação Completa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
