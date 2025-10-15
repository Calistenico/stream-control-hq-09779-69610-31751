import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServerPlans = () => {
  const plans = [
    {
      name: "Plano Completo",
      price: "R$ 3.500",
      description: "Servidor completo configurado e pronto para lucrar",
      features: [
        "Servidor VPS/Cloud configurado",
        "DRM OTT V4 instalado",
        "Sistema VOD instalado",
        "Página de vendas personalizada",
        "App Android com sua marca",
        "Suporte inicial e documentação",
        "Treinamento básico"
      ],
      highlighted: true
    },
    {
      name: "Plano Comum",
      price: "R$ 1.300",
      description: "Servidor pronto com fonte alugada para começar rápido",
      features: [
        "Servidor pronto e configurado",
        "App Android personalizado",
        "Fonte alugada com 100 conexões",
        "Painel de gerenciamento",
        "Suporte técnico básico"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-20 px-4 bg-card/30 backdrop-blur">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Criamos seu <span className="gradient-text">servidor completo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deixe toda a parte técnica conosco. Você recebe tudo pronto para começar a vender.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 space-y-6 transition-all hover:scale-105 ${
                plan.highlighted ? 'gradient-border' : 'bg-card border-border'
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-4xl font-bold gradient-text">
                {plan.price}
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                asChild
              >
                <a href={`https://wa.me/5544991082160?text=Olá!%20Gostaria%20de%20contratar%20o%20${encodeURIComponent(plan.name)}%20por%20${encodeURIComponent(plan.price)}`} target="_blank" rel="noopener noreferrer">Contratar {plan.name}</a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">O que está incluso na montagem:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">🖥️</span>
              <div>
                <div className="font-semibold">Servidor Online Configurado</div>
                <p className="text-sm text-muted-foreground">VPS ou Cloud totalmente configurado e otimizado</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📺</span>
              <div>
                <div className="font-semibold">Sistemas Instalados</div>
                <p className="text-sm text-muted-foreground">DRM OTT para canais + Sistema VOD para filmes/séries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">🌐</span>
              <div>
                <div className="font-semibold">Página de Vendas</div>
                <p className="text-sm text-muted-foreground">Landing page profissional para converter visitantes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📱</span>
              <div>
                <div className="font-semibold">App Android Personalizado</div>
                <p className="text-sm text-muted-foreground">Aplicativo com sua logo e identidade visual</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📚</span>
              <div>
                <div className="font-semibold">Documentação Completa</div>
                <p className="text-sm text-muted-foreground">Manuais e guias para operar seu servidor</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">🛟</span>
              <div>
                <div className="font-semibold">Suporte Inicial</div>
                <p className="text-sm text-muted-foreground">Acompanhamento nos primeiros dias de operação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerPlans;
