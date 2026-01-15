import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  year: string;
  category: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  team: { role: string; name: string }[];
  images: { url: string; size: "large" | "medium" | "small"; caption?: string }[];
}

const projectsData: Record<string, ProjectData> = {
  "nordic-brands": {
    id: "nordic-brands",
    name: "Nordic Brands",
    year: "2025-",
    category: "Identity",
    client: "Nordic Brands Group",
    description: "A comprehensive brand identity system for a Scandinavian holding company managing multiple lifestyle brands across furniture, fashion, and home goods.",
    challenge: "Create a cohesive visual identity that could serve as an umbrella brand while allowing individual sub-brands to maintain their unique character.",
    solution: "We developed a flexible identity system based on Nordic minimalism—clean typography, restrained color palette, and a modular logo system that adapts across contexts while maintaining brand recognition.",
    team: [
      { role: "Creative Direction", name: "Sarah Mitchell" },
      { role: "Art Direction", name: "Marcus Chen" },
      { role: "Design", name: "Emma Lindqvist" },
      { role: "Strategy", name: "David Okonkwo" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80", size: "large", caption: "Brand guidelines overview" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", size: "medium", caption: "Stationery system" },
      { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80", size: "medium", caption: "Packaging applications" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80", size: "large" },
      { url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80", size: "small", caption: "Environmental signage" },
    ],
  },
  "artisan-coffee-co": {
    id: "artisan-coffee-co",
    name: "Artisan Coffee Co",
    year: "2024-2025",
    category: "Branding",
    client: "Artisan Coffee Company",
    description: "Complete brand refresh for a specialty coffee roaster expanding from local cafés to national retail distribution.",
    challenge: "Transition from a beloved local brand to a retail-ready product without losing the artisanal authenticity that built their loyal customer base.",
    solution: "We preserved the handcrafted feel through custom illustrations and tactile packaging materials while introducing a refined typographic system and color palette suitable for retail environments.",
    team: [
      { role: "Creative Direction", name: "Sarah Mitchell" },
      { role: "Illustration", name: "Yuki Tanaka" },
      { role: "Packaging", name: "Carlos Rivera" },
      { role: "Photography", name: "Anna Kowalski" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80", size: "large", caption: "Café environment" },
      { url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80", size: "medium", caption: "Packaging system" },
      { url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80", size: "small", caption: "Brand touchpoints" },
      { url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80", size: "large" },
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Project not found
          </p>
          <Link
            to="/"
            className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {project.year}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-none">
                {project.name}
              </h1>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Client
              </p>
              <p className="text-sm uppercase tracking-wide mt-1">
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Gallery */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {project.images.map((image, index) => {
              // Create asymmetric layout patterns
              const patterns = [
                "col-span-12 md:col-span-8 md:col-start-1",
                "col-span-12 md:col-span-5 md:col-start-8 md:-mt-32",
                "col-span-6 md:col-span-4 md:col-start-2",
                "col-span-6 md:col-span-5 md:col-start-7 md:mt-16",
                "col-span-12 md:col-span-9 md:col-start-2",
                "col-span-12 md:col-span-4 md:col-start-9 md:-mt-24",
              ];

              const aspectRatios = {
                large: "aspect-[4/3]",
                medium: "aspect-[3/4]",
                small: "aspect-square",
              };

              return (
                <div
                  key={index}
                  className={`${patterns[index % patterns.length]} group`}
                >
                  <div className={`relative overflow-hidden ${aspectRatios[image.size]}`}>
                    <img
                      src={image.url}
                      alt={image.caption || `${project.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-3">
                      {image.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-6 py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Description */}
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                Overview
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed italic mb-12">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Solution
                  </p>
                  <p className="text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Team Credits */}
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                Team
              </p>
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index} className="border-t border-border pt-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="text-sm uppercase tracking-wide mt-1">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            Next Project
          </p>
          <Link
            to="/project/artisan-coffee-co"
            className="font-serif text-4xl md:text-6xl italic hover:text-muted-foreground transition-colors inline-flex items-center gap-4"
          >
            Artisan Coffee Co
            <ArrowUpRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
          >
            Studio Name
          </Link>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
