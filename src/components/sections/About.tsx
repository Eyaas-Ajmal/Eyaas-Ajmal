import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const skills = [
  "JavaScript/TypeScript",
  "Python",
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "TensorFlow",
  "PyTorch",
  "Docker",
];

const skillProgress = [
  { label: "Frontend", v: 90 },
  { label: "Backend", v: 85 },
  { label: "ML/AI", v: 80 },
];

const stats = [
  { label: "Certifications", value: "3" },
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Mastered", value: "12" },
  { label: "Passion‑Driven", value: "100%" },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <article className="glass rounded-2xl p-6 sm:p-10">
          <header className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className="sr-only">Portfolio introduction and skills</p>
          </header>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left: Portrait + Quick Stats */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative rounded-2xl border border-primary/20 shadow-[var(--shadow-glow)] bg-gradient-to-br from-primary/10 to-accent/10 p-2">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src="/lovable-uploads/83a724f8-996b-485d-9e36-966c4b5cc156.png"
                    alt="Professional profile portrait"
                    className="h-full w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Quick stats">
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border bg-card text-card-foreground p-4 sm:p-5 shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Intro + Actions + Tech badges */}
            <div className="md:col-span-7 space-y-6">
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
              >
                My journey began in the world of data science, where I discovered the power of transforming raw information into actionable insights. What started as curiosity about patterns in data evolved into a passion for building complete solutions that bridge analytical precision with user-centered design.
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                Today, I specialize in creating intelligent applications that don&apos;t just process data—they tell stories, solve problems, and enhance human experiences. My approach combines rigorous analytical thinking with creative problem-solving, ensuring every solution is both technically sound and intuitively accessible.
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                Currently expanding into machine learning and AI, I&apos;m fascinated by the intersection of traditional development and emerging technologies. Every project is an opportunity to push boundaries and create something meaningful.
              </motion.p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Button disabled className="hover-scale" aria-disabled>
                        <Download className="mr-2 h-4 w-4" aria-hidden />
                        Download Resume
                      </Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>Resume coming soon</TooltipContent>
                </Tooltip>
              </div>

              {/* Tech badges */}
              <div className="pt-2">
                <h3 className="text-lg font-medium mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <motion.div key={s} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
                      <Badge variant="secondary" className="hover-scale shadow-[var(--shadow-elegant)]">
                        {s}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Proficiency */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Skills &amp; Proficiency</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillProgress.map((item, i) => (
                <div key={item.label} className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.v}%</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Progress value={item.v} />
                  </motion.div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default About;
