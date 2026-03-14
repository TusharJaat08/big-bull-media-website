import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}
