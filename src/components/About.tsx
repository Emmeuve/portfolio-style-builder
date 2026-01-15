const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              About
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 italic">
              We believe great design is invisible. It doesn't shout—it resonates.
              Our approach combines strategic thinking with refined aesthetics to
              create brands that connect on a deeper level.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div>
                <p className="text-3xl font-bold mb-2">12+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">85+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">24</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Awards Won
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">∞</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Coffee Consumed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
