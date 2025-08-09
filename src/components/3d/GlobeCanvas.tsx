import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshPhysicalMaterial
        color={new THREE.Color("hsl(222, 84%, 60%)")}
        emissive={new THREE.Color("hsl(210, 80%, 60%)")}
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.1}
        transmission={0.1}
        thickness={0.6}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
}

const GlobeCanvas = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color={new THREE.Color("hsl(210, 90%, 60%)")} />
        <Stars radius={50} depth={20} count={3000} factor={4} saturation={0} fade speed={1} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "var(--gradient-hero)",
      }} />
    </div>
  );
};

export default GlobeCanvas;
