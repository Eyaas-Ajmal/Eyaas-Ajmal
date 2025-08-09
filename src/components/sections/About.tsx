import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-6 sm:p-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/30 shadow-[var(--shadow-glow)]">
                E
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I design and build intelligent products that fuse modern web engineering with data science. Passionate about ML/DL/Neural Networks, I craft robust full‑stack systems and data pipelines, focusing on performance, scalability, and delightful user experience.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Core Skills</h3>
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
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Currently Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {['ML', 'Deep Learning', 'Neural Networks'].map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[{label: 'Frontend', v: 90},{label: 'Backend', v: 85},{label: 'ML/AI', v: 80}].map((item, i) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-sm"><span>{item.label}</span><span>{item.v}%</span></div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.v}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, delay: i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[var(--shadow-glow)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
