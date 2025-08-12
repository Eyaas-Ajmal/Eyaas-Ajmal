import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Binary Image Classification Model",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Pandas", "SciPy"],
    description: "A binary image classification model that can classify images into two classes: 'cat' and 'dog'.",
  },
  {
    title: "My Portfolio Website",
    stack: ["React", "Tailwind CSS", "Vite", "TypeScript", "Shadcn UI", "Framer Motion", "Vercel", "GSAP","GIT"],
    description: "My Portfolio Website, your viewing it currently",
  },
  {
    title: "Library Management System",
    stack: ["PHP", "HTML", "CSS", "JavaScript","GIT"],
    description: "A complete library system with cataloging, lending, and admin dashboards.",
  },
  {
    title: "Computer Inventory Management",
    stack: ["Java", "MySQL", "JDBC", "Tomcat","GIT"],
    description: "Track hardware assets, lifecycle, and utilization with reports.",
  },
  {
    title: "Pet Universe",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux", "JWT", "Stripe","GIT"],
    description: "A full‑stack social and marketplace platform for pet lovers.",
  },
  {
    title: "Smart Ticket Support System",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux", "JWT", "Stripe", "Python", "Flask", "MySQL"],
    description: "A smart ticket support system for managing customer queries and support tickets.",
  },
];

const ProjectCard = ({ p }: { p: (typeof projects)[number] }) => {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${py * -6}deg`);
    el.style.setProperty("--ry", `${px * 6}deg`);
  };
  const reset = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform: "perspective(800px) rotateX(var(--rx)) rotateY(var(--ry))" }}
      className="glass rounded-xl p-6 h-full flex flex-col justify-between border border-primary/20"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
        <p className="text-muted-foreground mb-4">{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary/60 border border-border">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="hero">View More</Button>
          </DialogTrigger>
          <DialogContent className="glass">
            <DialogHeader>
              <DialogTitle>{p.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{p.description}</p>
              <p><span className="text-foreground">Tech:</span> {p.stack.join(", ")}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
