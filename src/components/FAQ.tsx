import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Vocês vendem fontes alugadas?",
      answer: "Sim! Oferecemos planos de fonte alugada a partir de R$ 250 mensais com 50 conexões. Nossa especialidade é fornecer sistemas PRÓPRIOS, mas também temos opções de fontes alugadas para quem quer começar rapidamente."
    },
    {
      question: "A estabilidade é garantida?",
      answer: "Sim! Como você terá seu próprio sistema DRM OTT V4 e VOD, a estabilidade depende da sua infraestrutura de servidor, que configuramos adequadamente. Não há dependência de terceiros como em fontes alugadas."
    },
    {
      question: "Qual o prazo de instalação?",
      answer: "Para o Combo Patrão e planos de servidor completo, o prazo médio é de 24-48 horas após a confirmação do pagamento. Produtos individuais (DRM, VOD, Apps) são entregues em até 24 horas."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte técnico via WhatsApp, Telegram e email. O suporte inicial está incluso em todos os planos. Para suporte estendido ou dedicado, consulte planos personalizados."
    },
    {
      question: "Posso testar antes de comprar?",
      answer: "Sim! Entre em contato pelo WhatsApp e podemos agendar uma demonstração ao vivo dos sistemas DRM OTT V4 e VOD em funcionamento."
    },
    {
      question: "Os sistemas recebem atualizações?",
      answer: "Sim. O DRM OTT V4 e Sistema VOD recebem atualizações regulares de segurança e novos recursos. As atualizações críticas são automáticas."
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer: "Não necessariamente. Fornecemos instalação completa, documentação detalhada e treinamento básico. O painel administrativo é intuitivo e fácil de usar."
    },
    {
      question: "Qual servidor é recomendado?",
      answer: "Recomendamos VPS/Cloud com no mínimo 4GB RAM, 2 CPU cores e 50GB SSD. Podemos indicar provedores confiáveis ou configurar em servidor que você já possui."
    },
    {
      question: "Os apps funcionam em quais dispositivos?",
      answer: "Os apps Android funcionam em smartphones, tablets, TV Box e Smart TVs com Android. Também oferecemos suporte para integração com apps de outras plataformas."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Aceitamos Pix à vista ou cartão de crédito parcelado em até 12x. Entre em contato para mais detalhes sobre as condições."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-card/30 backdrop-blur">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para ajudar você a escolher a melhor solução
          </p>
          <a
            href="https://wa.me/5544991082160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <span>💬</span>
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
