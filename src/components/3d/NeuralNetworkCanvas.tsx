import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Network({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const rng = () => (Math.random() - 0.5) * 3.2;
    for (let i = 0; i < 60; i++) pts.push(new THREE.Vector3(rng(), rng(), rng()));
    return pts;
  }, []);

  const lines = useMemo(() => {
    const arr: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.2 && Math.random() > 0.6) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }, [nodes]);

  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => new Float32Array(nodes.flatMap((n) => [n.x, n.y, n.z])), [nodes]);
  const linePositions = useMemo(() => {
    const arr: number[] = [];
    lines.forEach(([a, b]) => {
      arr.push(nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z);
    });
    return new Float32Array(arr);
  }, [lines, nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const glow = Math.min(1, progressRef.current) * 0.8 + 0.2;
    if (pointsRef.current) {
      (pointsRef.current.material as THREE.PointsMaterial).size = 0.03 + 0.02 * Math.sin(t * 2);
      (pointsRef.current.material as THREE.PointsMaterial).color.setHSL(0.58, 0.9, 0.6);
      (pointsRef.current.material as THREE.PointsMaterial).opacity = 0.8;
    }
    if (linesRef.current) {
      (linesRef.current.material as THREE.LineBasicMaterial).color.setHSL(0.57, 0.8, 0.55 + 0.3 * glow);
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = 0.5 + 0.4 * glow;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} transparent depthWrite={false} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial transparent linewidth={1} />
      </lineSegments>
    </group>
  );
}

const NeuralNetworkCanvas = ({ triggerId }: { triggerId: string }) => {
  const progressRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(progressRef, {
      current: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} id={triggerId} className="w-full h-[300px] sm:h-[360px] md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 6, 6]} intensity={1.1} />
        <Network progressRef={progressRef as any} />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkCanvas;
