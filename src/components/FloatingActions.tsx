import { MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5544991082160?text=Olá!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20as%20soluções%20de%20IPTV."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingActions;
