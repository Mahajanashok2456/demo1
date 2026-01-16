import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, useScroll } from '@react-three/drei';
import * as THREE from 'three';

function Bus() {
  const busRef = useRef();
  
  // Simple stylized bus
  return (
    <group ref={busRef} position={[0, -1, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Body */}
        <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 1.2, 4.5]} />
          <meshStandardMaterial color="#ff6b35" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Windows */}
        <mesh position={[0, 0.9, 0.5]} scale={[1.02, 0.4, 0.8]}>
           <boxGeometry args={[2, 1.2, 4.5]} />
           <meshPhysicalMaterial 
            color="#88ccff" 
            roughness={0} 
            metalness={0.1} 
            transmission={0.9} 
            transparent 
            opacity={0.8}
          />
        </mesh>

        {/* Wheels */}
        <mesh position={[-0.9, 0.3, 1.5]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[0.9, 0.3, 1.5]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[-0.9, 0.3, -1.5]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[0.9, 0.3, -1.5]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>

        {/* Headlights */}
        <mesh position={[-0.6, 0.5, 2.26]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0.6, 0.5, 2.26]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
}

function MovingLandscape() {
  const terrainRef = useRef();
  
  useFrame((state, delta) => {
    if (terrainRef.current) {
      terrainRef.current.position.z += delta * 4; // Move terrain towards camera
      if (terrainRef.current.position.z > 20) {
        terrainRef.current.position.z = 0;
      }
    }
  });

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
            const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 20 - 5;
      const z = Math.random() * -100;
      temp.push({ x, y, z });
    }
    return temp;
  }, []);

  return (
    <group>
        {/* Speed lines / Particles */}
        {particles.map((pos, i) => (
             <mesh key={i} position={[pos.x, pos.y, pos.z]}>
                 <sphereGeometry args={[0.05, 8, 8]} />
                 <meshBasicMaterial color="#fff" transparent opacity={0.6} />
             </mesh>
        ))}
        {/* Ground Plane */}
         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100, 20, 20]} />
            <meshStandardMaterial 
                color="#0b0d17" 
                wireframe 
                emissive="#1a2c5b"
                emissiveIntensity={0.2}
            />
        </mesh>
    </group>
  );
}

export default function World3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 2, 10]} fov={50} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
      <pointLight position={[-10, 5, -10]} intensity={2} color="#38bdf8" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={2} 
        castShadow 
        color="#ffffff"
      />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <fog attach="fog" args={['#0b0d17', 5, 30]} />

      <group rotation={[0, Math.PI / 6, 0]}> {/* Slight aesthetic angle */}
         <Bus />
      </group>
      
      <MovingLandscape />
    </>
  );
}
