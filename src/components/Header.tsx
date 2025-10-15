import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Produtos", href: "#produtos" },
    { label: "Combo Patrão", href: "#combo" },
    { label: "Montagem de Servidor", href: "#planos" },
    { label: "Apps Android", href: "#apps" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            <span className="text-xl font-bold gradient-text">Vyntrix Sistemas</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
              asChild
            >
              <a href="https://wa.me/5544991082160?text=Olá!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas%20IPTV." target="_blank" rel="noopener noreferrer">
                Fale no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 border-t border-border">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              asChild
            >
              <a href="https://wa.me/5544991082160?text=Olá!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas%20IPTV." target="_blank" rel="noopener noreferrer">
                Fale no WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
