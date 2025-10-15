import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AndroidApps = () => {
  const apps = [
    {
      name: "App Estilo Xtream",
      price: "R$ 190",
      description: "Aplicativo profissional com sua logo",
      features: [
        "Interface Xtream clássica",
        "Personalização com sua logo",
        "Suporte a listas M3U",
        "EPG integrado",
        "Player otimizado"
      ]
    },
    {
      name: "App iBO (5 temas)",
      price: "R$ 230",
      description: "App moderno com 5 temas diferentes",
      features: [
        "5 temas modernos inclusos",
        "Interface customizável",
        "Player avançado",
        "Recursos premium",
        "Atualizações incluídas"
      ]
    },
    {
      name: "App Smarters V3",
      price: "R$ 250",
      description: "Versão premium do Smarters",
      features: [
        "Interface moderna V3",
        "Multi-tela suportado",
        "Chromecast integrado",
        "Gravação de conteúdo",
        "Controle parental"
      ]
    },
    {
      name: "App com Conteúdo Próprio",
      price: "R$ 500",
      badge: "MAIS COMPLETO",
      description: "2 apps + painel admin completo",
      features: [
        "App Free (com anúncios para monetizar)",
        "App Premium (sem anúncios)",
        "Painel de administração web",
        "Gerenciamento de conteúdo",
        "Sistema de usuários e revendas",
        "Relatórios e analytics"
      ],
      link: "https://webplay.eliteflix.shop",
      highlighted: true
    }
  ];

  return (
    <section id="apps" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Apps Android para <span className="gradient-text">revenda</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aplicativos profissionais com sua marca. Prontos para distribuir aos seus clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <Card
              key={app.name}
              className={`p-6 space-y-4 transition-all hover:scale-105 ${
                app.highlighted
                  ? 'gradient-border'
                  : 'bg-card border-border'
              }`}
            >
              {app.badge && (
                <Badge className="bg-primary text-white">
                  {app.badge}
                </Badge>
              )}
              
              <div>
                <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>

              <div className="text-3xl font-bold gradient-text">
                {app.price}
              </div>

              <ul className="space-y-2">
                {app.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {app.link && (
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="https://webplay.eliteflix.shop" target="_blank" rel="noopener noreferrer">
                      Ver Demo
                    </a>
                  </Button>
                )}

                <Button
                  className={`w-full font-semibold ${
                    app.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  asChild
                >
                  <a href="https://wa.me/5544991082160?text=Olá%20quero%20saber%20sobre%20o%20App" target="_blank" rel="noopener noreferrer">Comprar App</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Todos os apps incluem:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">🎨</span>
              <div>
                <div className="font-semibold">Personalização Completa</div>
                <p className="text-sm text-muted-foreground">Logo, cores e nome da sua empresa</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📦</span>
              <div>
                <div className="font-semibold">APK Pronto</div>
                <p className="text-sm text-muted-foreground">Arquivo instalável para distribuição</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">🔄</span>
              <div>
                <div className="font-semibold">Suporte Técnico</div>
                <p className="text-sm text-muted-foreground">Ajuda na configuração e uso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidApps;
