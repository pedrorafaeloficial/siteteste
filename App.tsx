import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl">
         <div className="mb-8 text-center">
            <h2 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Component Preview</h2>
         </div>
        <SplineSceneBasic />
      </div>
    </main>
  );
}