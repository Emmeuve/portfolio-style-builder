import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  year: string;
  category: string;
  active: boolean;
}

const projects: Project[] = [
  { id: "nordic-brands", name: "NORDIC BRANDS", year: "2025-", category: "IDENTITY", active: true },
  { id: "artisan-coffee-co", name: "ARTISAN COFFEE CO", year: "2024-2025", category: "BRANDING", active: true },
  { id: "minimal-studios", name: "MINIMAL STUDIOS", year: "2024-", category: "DIGITAL", active: true },
  { id: "echo-magazine", name: "ECHO MAGAZINE", year: "2023-2024", category: "EDITORIAL", active: false },
  { id: "heritage-watches", name: "HERITAGE WATCHES", year: "2023-", category: "IDENTITY", active: true },
  { id: "bloom-skincare", name: "BLOOM SKINCARE", year: "2023", category: "PACKAGING", active: false },
  { id: "urban-architects", name: "URBAN ARCHITECTS", year: "2022-2023", category: "BRANDING", active: true },
  { id: "sound-collective", name: "SOUND COLLECTIVE", year: "2022-", category: "DIGITAL", active: true },
  { id: "terra-wines", name: "TERRA WINES", year: "2021-2022", category: "IDENTITY", active: false },
  { id: "modern-gallery", name: "MODERN GALLERY", year: "2021-", category: "ART DIRECTION", active: true },
];

const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs uppercase tracking-wider">Selected Work</h2>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {projects.length} Projects
          </span>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className={`grid grid-cols-12 gap-4 py-4 border-t border-border cursor-pointer group ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "text-muted-foreground"
                  : "text-foreground"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                <span
                  className={`text-sm md:text-base uppercase tracking-wide transition-all duration-300 ${
                    project.active ? "font-bold" : "font-normal"
                  }`}
                >
                  {project.name}
                </span>
                <ArrowUpRight 
                  className={`w-4 h-4 transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                />
              </div>
              <div className="col-span-3 md:col-span-4 hidden md:block">
                <span className="text-sm uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                  {project.category}
                </span>
              </div>
              <div className="col-span-6 md:col-span-3 text-right">
                <span className="text-sm uppercase tracking-wide">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
          <div className="border-t border-border"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
