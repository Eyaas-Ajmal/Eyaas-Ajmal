import { ReactNode, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

const MagneticButton = ({ children, className }: MagneticButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.2);
    y.set(relY * 0.2);
  };

  const reset = () => {
    setIsHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={reset}
      onMouseMove={onMouseMove}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
