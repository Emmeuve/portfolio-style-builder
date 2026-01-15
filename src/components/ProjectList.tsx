import { useState } from "react";

interface Project {
  name: string;
  year: string;
  category: string;
  active: boolean;
}

const projects: Project[] = [
  { name: "NORDIC BRANDS", year: "2025-", category: "IDENTITY", active: true },
  { name: "ARTISAN COFFEE CO", year: "2024-2025", category: "BRANDING", active: true },
  { name: "MINIMAL STUDIOS", year: "2024-", category: "DIGITAL", active: true },
  { name: "ECHO MAGAZINE", year: "2023-2024", category: "EDITORIAL", active: false },
  { name: "HERITAGE WATCHES", year: "2023-", category: "IDENTITY", active: true },
  { name: "BLOOM SKINCARE", year: "2023", category: "PACKAGING", active: false },
  { name: "URBAN ARCHITECTS", year: "2022-2023", category: "BRANDING", active: true },
  { name: "SOUND COLLECTIVE", year: "2022-", category: "DIGITAL", active: true },
  { name: "TERRA WINES", year: "2021-2022", category: "IDENTITY", active: false },
  { name: "MODERN GALLERY", year: "2021-", category: "ART DIRECTION", active: true },
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
            <div
              key={index}
              className={`grid grid-cols-12 gap-4 py-4 border-t border-border cursor-pointer group ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "text-muted-foreground"
                  : "text-foreground"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="col-span-6 md:col-span-5">
                <span
                  className={`text-sm md:text-base uppercase tracking-wide transition-all duration-300 ${
                    project.active ? "font-bold" : "font-normal"
                  }`}
                >
                  {project.name}
                </span>
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
            </div>
          ))}
          <div className="border-t border-border"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
