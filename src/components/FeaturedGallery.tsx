import { Link } from "react-router-dom";

interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  image: string;
  size: "large" | "medium" | "small";
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "nordic-brands",
    name: "Nordic Brands",
    category: "Identity",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    size: "large",
  },
  {
    id: "artisan-coffee-co",
    name: "Artisan Coffee Co",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    size: "medium",
  },
  {
    id: "minimal-studios",
    name: "Minimal Studios",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    size: "small",
  },
  {
    id: "heritage-watches",
    name: "Heritage Watches",
    category: "Identity",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    size: "medium",
  },
  {
    id: "sound-collective",
    name: "Sound Collective",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    size: "large",
  },
  {
    id: "modern-gallery",
    name: "Modern Gallery",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    size: "small",
  },
];

const FeaturedGallery = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="text-xs uppercase tracking-wider">Featured Work</h2>
          <a
            href="#work"
            className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            View All →
          </a>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Row 1 - Large left, Medium right offset */}
          <Link
            to={`/project/${featuredProjects[0].id}`}
            className="col-span-12 md:col-span-7 group"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={featuredProjects[0].image}
                alt={featuredProjects[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors">
                {featuredProjects[0].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[0].category}
              </span>
            </div>
          </Link>

          <Link
            to={`/project/${featuredProjects[1].id}`}
            className="col-span-12 md:col-span-4 md:col-start-9 md:mt-24 group"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={featuredProjects[1].image}
                alt={featuredProjects[1].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors">
                {featuredProjects[1].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[1].category}
              </span>
            </div>
          </Link>

          {/* Row 2 - Small left, Medium center-right */}
          <Link
            to={`/project/${featuredProjects[2].id}`}
            className="col-span-6 md:col-span-3 md:col-start-2 md:-mt-16 group"
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={featuredProjects[2].image}
                alt={featuredProjects[2].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors block">
                {featuredProjects[2].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[2].category}
              </span>
            </div>
          </Link>

          <Link
            to={`/project/${featuredProjects[3].id}`}
            className="col-span-6 md:col-span-5 md:col-start-6 md:mt-8 group"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={featuredProjects[3].image}
                alt={featuredProjects[3].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors">
                {featuredProjects[3].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[3].category}
              </span>
            </div>
          </Link>

          {/* Row 3 - Large spanning */}
          <Link
            to={`/project/${featuredProjects[4].id}`}
            className="col-span-12 md:col-span-8 md:col-start-3 md:mt-12 group"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={featuredProjects[4].image}
                alt={featuredProjects[4].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors">
                {featuredProjects[4].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[4].category}
              </span>
            </div>
          </Link>

          {/* Small offset right */}
          <Link
            to={`/project/${featuredProjects[5].id}`}
            className="col-span-6 md:col-span-3 md:col-start-10 md:-mt-32 group"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={featuredProjects[5].image}
                alt={featuredProjects[5].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
            <div className="mt-4">
              <span className="text-sm uppercase tracking-wide font-bold group-hover:text-muted-foreground transition-colors block">
                {featuredProjects[5].name}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {featuredProjects[5].category}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
