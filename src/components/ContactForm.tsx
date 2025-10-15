import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    interest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        interest: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Solicite seu <span className="gradient-text">orçamento</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
        </div>

        <div className="gradient-border p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(44) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">
                  Produto de interesse *
                </label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  required
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione um produto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="combo">Combo Patrão (R$ 2.500)</SelectItem>
                    <SelectItem value="drm">DRM OTT V4 (R$ 1.800)</SelectItem>
                    <SelectItem value="vod">Sistema VOD (R$ 1.100)</SelectItem>
                    <SelectItem value="completo">Plano Completo (R$ 3.500)</SelectItem>
                    <SelectItem value="comum">Plano Comum (R$ 1.300)</SelectItem>
                    <SelectItem value="app">Apps Android</SelectItem>
                    <SelectItem value="outro">Outro / Orçamento personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Conte-nos mais sobre suas necessidades..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Ao enviar, você concorda com nossa política de privacidade
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-bold mb-2">WhatsApp</h4>
            <a
              href="https://wa.me/5544991082160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +55 44 99108-2160
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-bold mb-2">E-mail</h4>
            <a
              href="mailto:contato@vyntrixhost.com"
              className="text-primary hover:underline"
            >
              contato@vyntrixhost.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
            <div className="text-3xl mb-3">📸</div>
            <h4 className="font-bold mb-2">Instagram</h4>
            <a
              href="https://instagram.com/vyntrixsistemas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @vyntrixsistemas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
