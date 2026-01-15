const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="font-bold text-sm uppercase tracking-wider mb-4">
              Studio Name
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Design & Branding
              <br />
              New York + Remote
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              New Business
            </p>
            <a
              href="mailto:hello@studio.com"
              className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors"
            >
              hello@studio.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Follow
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block"
              >
                Dribbble
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Settings
            </p>
            <div className="space-y-2">
              <button className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block text-left">
                Dark Mode: Off
              </button>
              <button className="text-sm uppercase tracking-wide hover:text-muted-foreground transition-colors block text-left">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {currentYear} Studio Name. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-4 md:mt-0">
            Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
