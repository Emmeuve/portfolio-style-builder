import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  year: string;
  category: string;
  client: string;
  brief: string;
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
    brief: "",
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
    brief: "",
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
  "minimal-studios": {
    id: "minimal-studios",
    name: "Minimal Studios",
    year: "2024-",
    category: "Digital",
    client: "Minimal Studios",
    brief: "",
    description: "A digital-first brand identity and website for a contemporary architecture and interior design studio based in Copenhagen.",
    challenge: "Create a digital presence that showcases their work without overshadowing it, while establishing them as leaders in minimalist design.",
    solution: "We crafted an ultra-clean website with generous white space, subtle micro-interactions, and a content-first approach that lets their architectural work speak for itself.",
    team: [
      { role: "Creative Direction", name: "Marcus Chen" },
      { role: "UX Design", name: "Lisa Park" },
      { role: "Development", name: "Thomas Berg" },
      { role: "Motion", name: "Kai Nakamura" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80", size: "large", caption: "Website homepage" },
      { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", size: "medium", caption: "Mobile experience" },
      { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", size: "medium", caption: "Project gallery" },
      { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", size: "large" },
      { url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80", size: "small", caption: "Interactive elements" },
    ],
  },
  "echo-magazine": {
    id: "echo-magazine",
    name: "Echo Magazine",
    year: "2023-2024",
    category: "Editorial",
    client: "Echo Publishing",
    brief: "",
    description: "Complete editorial redesign for a culture and lifestyle magazine, bridging print heritage with digital innovation.",
    challenge: "Revitalize a legacy publication for modern audiences while honoring its 30-year editorial history and maintaining subscriber loyalty.",
    solution: "We developed a dynamic grid system and typographic hierarchy that feels fresh yet timeless, with seamless transitions between print and digital reading experiences.",
    team: [
      { role: "Art Direction", name: "Emma Lindqvist" },
      { role: "Editorial Design", name: "James Morrison" },
      { role: "Typography", name: "Sofia Reyes" },
      { role: "Digital", name: "Alex Kim" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1586953208270-767889fa9b6f?w=1200&q=80", size: "large", caption: "Cover design system" },
      { url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80", size: "medium", caption: "Interior spreads" },
      { url: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&q=80", size: "small", caption: "Typography details" },
      { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80", size: "large" },
    ],
  },
  "heritage-watches": {
    id: "heritage-watches",
    name: "Heritage Watches",
    year: "2023-",
    category: "Identity",
    client: "Heritage Watch Company",
    brief: "",
    description: "Brand identity and visual language for a Swiss watchmaker combining centuries of craftsmanship with contemporary design sensibilities.",
    challenge: "Position a new luxury watch brand in a crowded market while communicating both heritage craftsmanship and modern innovation.",
    solution: "We created an identity rooted in precision and timelessness—geometric logomark, refined serif typography, and a restrained color palette that speaks to connoisseurs.",
    team: [
      { role: "Creative Direction", name: "Sarah Mitchell" },
      { role: "Brand Strategy", name: "David Okonkwo" },
      { role: "Design", name: "Marcus Chen" },
      { role: "Copywriting", name: "Claire Dubois" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80", size: "large", caption: "Product photography" },
      { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80", size: "medium", caption: "Dial details" },
      { url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80", size: "medium", caption: "Packaging" },
      { url: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=80", size: "large" },
      { url: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=600&q=80", size: "small", caption: "Brand collateral" },
    ],
  },
  "bloom-skincare": {
    id: "bloom-skincare",
    name: "Bloom Skincare",
    year: "2023",
    category: "Packaging",
    client: "Bloom Beauty",
    brief: "",
    description: "Sustainable packaging design for an organic skincare line focused on natural ingredients and environmental responsibility.",
    challenge: "Design packaging that communicates luxury and efficacy while using 100% sustainable materials and minimizing environmental impact.",
    solution: "We developed refillable glass containers with minimal branding, seed-paper labels, and compostable secondary packaging that elevates the unboxing experience.",
    team: [
      { role: "Creative Direction", name: "Emma Lindqvist" },
      { role: "Packaging Design", name: "Carlos Rivera" },
      { role: "Sustainability", name: "Maya Green" },
      { role: "Production", name: "Henrik Larsson" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80", size: "large", caption: "Product range" },
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80", size: "medium", caption: "Material details" },
      { url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=80", size: "small", caption: "Refill system" },
      { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80", size: "large" },
    ],
  },
  "urban-architects": {
    id: "urban-architects",
    name: "Urban Architects",
    year: "2022-2023",
    category: "Branding",
    client: "Urban Architecture Group",
    brief: "",
    description: "Complete rebrand for an award-winning architecture firm specializing in sustainable urban development and public spaces.",
    challenge: "Reflect their evolution from residential architecture to large-scale urban planning while maintaining approachability and human-centered values.",
    solution: "We created a bold, structural identity with a dynamic logo system inspired by city grids, paired with warm photography and accessible communication.",
    team: [
      { role: "Creative Direction", name: "Marcus Chen" },
      { role: "Art Direction", name: "Sarah Mitchell" },
      { role: "Motion Design", name: "Kai Nakamura" },
      { role: "Strategy", name: "David Okonkwo" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", size: "large", caption: "Environmental graphics" },
      { url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80", size: "medium", caption: "Building signage" },
      { url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80", size: "medium", caption: "Brand applications" },
      { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80", size: "large" },
      { url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80", size: "small", caption: "Stationery" },
    ],
  },
  "sound-collective": {
    id: "sound-collective",
    name: "Sound Collective",
    year: "2022-",
    category: "Digital",
    client: "Sound Collective Records",
    brief: "",
    description: "Digital platform and brand identity for an independent record label championing experimental and electronic music.",
    challenge: "Create a distinctive visual identity that captures the energy of their roster while building a functional platform for music discovery and artist promotion.",
    solution: "We designed a vibrant, modular identity with generative visual elements that respond to audio, paired with an immersive web experience showcasing artists and releases.",
    team: [
      { role: "Creative Direction", name: "Kai Nakamura" },
      { role: "UX Design", name: "Lisa Park" },
      { role: "Development", name: "Thomas Berg" },
      { role: "Generative Art", name: "Nina Volkov" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", size: "large", caption: "Visual identity system" },
      { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", size: "medium", caption: "Artist pages" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80", size: "small", caption: "Event graphics" },
      { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80", size: "large" },
    ],
  },
  "terra-wines": {
    id: "terra-wines",
    name: "Terra Wines",
    year: "2021-2022",
    category: "Identity",
    client: "Terra Vineyards",
    brief: "",
    description: "Brand identity and packaging for a family-owned winery transitioning from bulk production to premium direct-to-consumer sales.",
    challenge: "Establish a premium positioning while honoring four generations of winemaking tradition and their deep connection to the land.",
    solution: "We developed an earthy, sophisticated identity featuring custom typography, hand-drawn vineyard illustrations, and tactile label materials that tell their story.",
    team: [
      { role: "Creative Direction", name: "Sarah Mitchell" },
      { role: "Illustration", name: "Yuki Tanaka" },
      { role: "Typography", name: "Sofia Reyes" },
      { role: "Packaging", name: "Carlos Rivera" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80", size: "large", caption: "Label design" },
      { url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80", size: "medium", caption: "Vineyard photography" },
      { url: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80", size: "small", caption: "Packaging details" },
      { url: "https://images.unsplash.com/photo-1543721549-b5e3e87a4d87?w=1200&q=80", size: "large" },
    ],
  },
  "modern-gallery": {
    id: "modern-gallery",
    name: "Modern Gallery",
    year: "2021-",
    category: "Art Direction",
    client: "Modern Gallery NYC",
    brief: "",
    description: "Visual identity and exhibition design for a contemporary art gallery in New York's Chelsea district.",
    challenge: "Create a flexible identity system that elevates diverse artists without imposing a singular aesthetic, while establishing gallery recognition.",
    solution: "We designed a minimal, typographic identity with a variable grid system that adapts to each exhibition while maintaining cohesive wayfinding and communications.",
    team: [
      { role: "Art Direction", name: "Marcus Chen" },
      { role: "Exhibition Design", name: "Emma Lindqvist" },
      { role: "Graphic Design", name: "Alex Kim" },
      { role: "Spatial Design", name: "Nina Volkov" },
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80", size: "large", caption: "Gallery space" },
      { url: "https://images.unsplash.com/photo-1531349523045-8f61fb9f5d4a?w=600&q=80", size: "small" },
      { url: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80", size: "medium", caption: "Exhibition graphics" },
      { url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80", size: "medium" },
      { url: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80", size: "small", caption: "Wayfinding system" },
      { url: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=1200&q=80", size: "large" },
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

      {/* Brief / Project Introduction */}
      {project.brief && (
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed italic text-foreground/90">
              {project.brief}
            </p>
          </div>
        </section>
      )}

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
