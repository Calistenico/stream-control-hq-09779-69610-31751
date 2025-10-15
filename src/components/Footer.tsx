const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-white">V</span>
              </div>
              <span className="text-xl font-bold gradient-text">Vyntrix</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluções completas para donos de servidor IPTV. Estabilidade, controle e lucro.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#produtos" className="hover:text-primary transition-colors">DRM OTT V4</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Sistema VOD</a></li>
              <li><a href="#combo" className="hover:text-primary transition-colors">Combo Patrão</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos de Servidor</a></li>
              <li><a href="#apps" className="hover:text-primary transition-colors">Apps Android</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#cases" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">📱</span>
                <a href="https://wa.me/5544991082160" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +55 44 99108-2160
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <a href="mailto:contato@vyntrixhost.com" className="hover:text-primary transition-colors">
                  contato@vyntrixhost.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📸</span>
                <a href="https://instagram.com/vyntrixsistemas" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @vyntrixsistemas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Vyntrix Sistemas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a
              href="https://wa.me/5544991082160"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/vyntrixsistemas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@vyntrixhost.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
