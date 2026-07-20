"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
    if (groupRef.current) {
      // Gentle mouse-reactive parallax tilt
      const targetX = (state.pointer.y * Math.PI) / 24;
      const targetY = (state.pointer.x * Math.PI) / 20;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#6C63FF"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          emissive="#A855F7"
          emissiveIntensity={0.35}
        />
      </Sphere>

      {/* Thin glowing wireframe shell for a "neural core" feel */}
      <Sphere args={[1.75, 32, 32]}>
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.12} />
      </Sphere>
    </group>
  );
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.pointer.x * 4;
      lightRef.current.position.y = state.pointer.y * 3;
    }
  });
  return <pointLight ref={lightRef} color="#00D4FF" intensity={8} distance={12} />;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[-4, 3, 4]} color="#6C63FF" intensity={6} />
        <MouseLight />

        <AICore />

        <Sparkles count={140} scale={9} size={2.4} speed={0.35} color="#A855F7" opacity={0.6} />
      </Suspense>
    </Canvas>
  );
}
