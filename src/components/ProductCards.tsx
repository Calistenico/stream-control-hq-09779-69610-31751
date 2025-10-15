import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import drmImage from "@/assets/drm-v4.png";
import vodImage from "@/assets/sistema-vod.png";
import comboImage from "@/assets/combo-sistema.png";

const ProductCards = () => {
  const products = [
    {
      id: "drm-ott",
      name: "DRM OTT V4",
      price: "R$ 1.800",
      image: drmImage,
      badge: null,
      description: "Sistema de canais com extrator próprio",
      features: [
        "~470 canais estáveis",
        "Suporte: Claro, SKY, PlayPlus, Globoplay",
        "Canais abertos + Desenhos 24h",
        "Painel administrativo completo",
        "Logs e controle de conexões",
        "Atualizações automáticas"
      ],
      cta: "Comprar DRM OTT V4",
      link: "https://wa.me/5544991082160?text=Olá!%20Gostaria%20de%20comprar%20o%20DRM%20OTT%20V4%20por%20R$%201.800"
    },
    {
      id: "sistema-vod",
      name: "Sistema VOD",
      price: "R$ 1.100",
      image: vodImage,
      badge: null,
      description: "Crie sua própria fonte de filmes e séries",
      features: [
        "Top 10 mais assistidos automático",
        "Envio de banner e notificações Telegram",
        "Sistema proxy com cache inteligente",
        "Biblioteca completa de VODs",
        "Painel de gerenciamento",
        "Integração TMDB"
      ],
      cta: "Comprar Sistema VOD",
      link: "https://wa.me/5544991082160?text=Olá!%20Gostaria%20de%20comprar%20o%20Sistema%20VOD%20por%20R$%201.100"
    },
    {
      id: "combo",
      name: "COMBO PATRÃO",
      price: "R$ 2.500",
      image: comboImage,
      badge: "MELHOR CUSTO-BENEFÍCIO",
      description: "Solução completa: DRM + VOD + Suporte",
      features: [
        "DRM OTT V4 completo",
        "Sistema VOD completo",
        "Instalação profissional",
        "Suporte técnico dedicado",
        "Documentação completa",
        "Economia de R$ 400"
      ],
      cta: "Adquirir Combo Patrão",
      link: "https://wa.me/5544991082160?text=Olá!%20Gostaria%20de%20adquirir%20o%20Combo%20Patrão%20por%20R$%202.500",
      highlighted: true
    }
  ];

  return (
    <section id="produtos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha seu <span className="gradient-text">sistema</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções profissionais com instalação, suporte e atualizações incluídas
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`relative overflow-hidden transition-all hover:scale-105 ${
                product.highlighted ? 'gradient-border' : 'bg-card border-border'
              }`}
            >
              {product.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-primary text-white">
                  {product.badge}
                </Badge>
              )}
              
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div className="text-4xl font-bold gradient-text">
                  {product.price}
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold ${
                    product.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  asChild
                >
                  <a href={product.link} target="_blank" rel="noopener noreferrer">{product.cta}</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
