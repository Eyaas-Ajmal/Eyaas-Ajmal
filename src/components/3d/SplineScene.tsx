import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene = ({ scene, className }: SplineSceneProps) => {
  return (
    <div className={className}>
      <Spline scene={scene} className="w-full h-full" />
    </div>
  );
};

export default SplineScene;

