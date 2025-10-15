import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo S.",
      role: "Dono de Servidor IPTV",
      content: "Depois de anos usando fontes alugadas e enfrentando instabilidade, finalmente tenho controle total. O DRM OTT V4 é estável e o suporte é excepcional. Meu faturamento triplicou!",
      rating: 5
    },
    {
      name: "Marcos P.",
      role: "Empreendedor Digital",
      content: "O Combo Patrão foi a melhor decisão. Recebi tudo pronto: servidor, apps, sistemas. Em 48h já estava vendendo. O sistema VOD com cache inteligente é sensacional.",
      rating: 5
    },
    {
      name: "Ana Carolina M.",
      role: "Revendedora IPTV",
      content: "Os apps personalizados fizeram toda diferença. Meus clientes adoram a qualidade e eu consigo escalar sem preocupação com infraestrutura. Recomendo fortemente!",
      rating: 5
    }
  ];

  return (
    <section id="cases" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Casos de <span className="gradient-text">sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes estão dizendo
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 bg-card border-border hover:border-primary transition-all"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Quer compartilhar seu caso de sucesso?
          </p>
          <a
            href="https://wa.me/5544991082160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
