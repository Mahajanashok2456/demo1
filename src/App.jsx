import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import World3D from './components/World3D';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Founders from './components/Founders';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }} dpr={[1, 2]}>
           <Suspense fallback={null}>
             <World3D />
           </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)] z-10 pointer-events-none" />
      </div>

      {/* Scrollable Content */}
      <main className="relative z-10">
        <Hero />
        <Packages />
        <WhyChooseUs />
        <About />
        <Founders />
        <Contact />
        
        <footer className="py-8 text-center text-[var(--color-text-muted)] text-sm border-t border-white/10 relative z-10 bg-[var(--color-bg)]">
          <p>© {new Date().getFullYear()} TRAVEL.ENV. All rights reserved.</p>
        </footer>
      </main>
      
      <Loader />
    </>
  );
}

export default App;
