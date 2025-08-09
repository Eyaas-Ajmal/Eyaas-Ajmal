import NeuralNetworkCanvas from "@/components/3d/NeuralNetworkCanvas";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MLJourney = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ml-fade").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="ml" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="ml-fade">
          <NeuralNetworkCanvas triggerId="ml-network" />
        </div>
        <div className="ml-fade">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Machine Learning Journey</h2>
          <p className="text-muted-foreground leading-relaxed">
            From fundamentals to advanced deep learning, I explore neural architectures, training dynamics, and production ML workflows. I love turning research into real‑world systems—optimizing data pipelines, experiment tracking, and deploying models that drive value.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• Neural Network foundations and intuition</li>
            <li>• CNNs/RNNs/Transformers</li>
            <li>• Experimentation, MLOps, and monitoring</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MLJourney;
