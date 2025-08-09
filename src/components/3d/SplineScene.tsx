import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene = ({ scene, className }: SplineSceneProps) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-2 border-muted-foreground border-t-primary animate-spin"
            aria-label="Loading 3D robot"
          />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
};

export default SplineScene;
