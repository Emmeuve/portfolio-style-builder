import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

// Datos de experiencia laboral - editar aquí
const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Designer",
    company: "Design Studio Co.",
    location: "Buenos Aires, Argentina",
    period: "2022 — Present",
    description: "Leading brand identity projects for international clients, managing design teams and client relationships.",
    achievements: [
      "Led rebranding for 15+ companies",
      "Managed team of 5 designers",
      "Increased client retention by 40%",
    ],
  },
  {
    id: "2",
    role: "Brand Designer",
    company: "Creative Agency",
    location: "Buenos Aires, Argentina",
    period: "2019 — 2022",
    description: "Developed visual identities, marketing materials, and digital experiences for diverse industries.",
    achievements: [
      "Created 50+ brand identities",
      "Won 3 industry awards",
    ],
  },
  {
    id: "3",
    role: "Junior Designer",
    company: "Startup Hub",
    location: "Buenos Aires, Argentina",
    period: "2017 — 2019",
    description: "Supported senior designers in creating brand assets and marketing collateral for tech startups.",
  },
];

// Datos de educación - editar aquí
const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "Master in Brand Strategy",
    institution: "Universidad de Buenos Aires",
    location: "Buenos Aires, Argentina",
    period: "2020 — 2022",
    description: "Specialized in strategic brand development and consumer behavior.",
  },
  {
    id: "2",
    degree: "Bachelor in Graphic Design",
    institution: "Universidad de Palermo",
    location: "Buenos Aires, Argentina",
    period: "2013 — 2017",
    description: "Focus on visual communication and digital design.",
  },
];

// Skills y competencias - editar aquí
const skills = [
  "Brand Strategy",
  "Visual Identity",
  "Typography",
  "UI/UX Design",
  "Art Direction",
  "Motion Graphics",
  "Adobe Creative Suite",
  "Figma",
  "Web Design",
  "Print Design",
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <p className="text-xs uppercase tracking-wider font-bold">Resume / CV</p>
          <div className="w-16" />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <motion.div
            className="mb-24"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl italic mb-8"
              variants={fadeInUp}
            >
              Curriculum
              <br />
              Vitae
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg max-w-xl"
              variants={fadeInUp}
            >
              A summary of my professional experience, education, and skills
              in design and branding.
            </motion.p>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center gap-3 mb-12"
              variants={fadeInUp}
            >
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xs uppercase tracking-wider font-bold">
                Work Experience
              </h2>
            </motion.div>

            <div className="space-y-16">
              {experienceData.map((item) => (
                <motion.div
                  key={item.id}
                  className="grid md:grid-cols-[200px_1fr] gap-8 border-l-2 border-border pl-8 relative"
                  variants={fadeInUp}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground" />

                  {/* Period */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl italic mb-2">
                      {item.role}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    {item.achievements && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-foreground mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center gap-3 mb-12"
              variants={fadeInUp}
            >
              <GraduationCap className="w-5 h-5" />
              <h2 className="text-xs uppercase tracking-wider font-bold">
                Education
              </h2>
            </motion.div>

            <div className="space-y-16">
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  className="grid md:grid-cols-[200px_1fr] gap-8 border-l-2 border-border pl-8 relative"
                  variants={fadeInUp}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground" />

                  {/* Period */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl italic mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center gap-3 mb-12"
              variants={fadeInUp}
            >
              <Award className="w-5 h-5" />
              <h2 className="text-xs uppercase tracking-wider font-bold">
                Skills & Expertise
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 border border-border text-sm hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                  variants={fadeInUp}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Resume;
