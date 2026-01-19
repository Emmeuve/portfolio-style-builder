const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="font-bold text-sm uppercase tracking-wider mb-4">
              Estudio Emmeuve
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Diseño & Branding
              <br />
              Buenos Aires, Argentina
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Contacto
            </p>
            <a
              href="mailto:hola@estudioemmeuve.com"
              className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors"
            >
              hola@estudioemmeuve.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Redes
            </p>
            <div className="space-y-2">
              <a
                href="https://instagram.com/estudioemmeuve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/estudioemmeuve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="https://behance.net/estudioemmeuve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                Behance
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Legal
            </p>
            <div className="space-y-2">
              <button className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block text-left">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {currentYear} Estudio Emmeuve. Todos los derechos reservados.
          </p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-4 md:mt-0">
            Disponible para nuevos proyectos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
