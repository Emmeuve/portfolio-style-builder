const services = [
  {
    title: "Brand Identity",
    description: "Strategic positioning that sets you apart.",
  },
  {
    title: "Art Direction",
    description: "Visual storytelling with purpose.",
  },
  {
    title: "Digital Design",
    description: "Experiences that engage and convert.",
  },
  {
    title: "Packaging",
    description: "Tangible expressions of your brand.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl italic leading-tight">
              Strategic design for
              <br />
              ambitious brands.
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="py-6 border-b border-border group cursor-pointer"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide group-hover:text-muted-foreground transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
