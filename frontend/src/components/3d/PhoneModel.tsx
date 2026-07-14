import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, MeshTransmissionMaterial, Float, Environment, Text, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function PhoneModel() {
  const group = useRef<THREE.Group>(null);

  // Subtle floating animation is handled by Float wrapper,
  // but we can add micro-rotations based on mouse eventually.
  useFrame((state) => {
    if (group.current) {
      // Gentle breathing rotation
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        (state.pointer.x * Math.PI) / 10,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        (state.pointer.y * Math.PI) / 10,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <group ref={group} rotation={[0, -0.3, 0]}>
        
        {/* Main Phone Body (Graphite) */}
        <RoundedBox args={[2.5, 5, 0.3]} radius={0.3} smoothness={10}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </RoundedBox>

        {/* Screen Display (Glassy with reflection) */}
        <mesh position={[0, 0, 0.16]}>
          <planeGeometry args={[2.3, 4.8]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.1}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.5}
            temporalDistortion={0.1}
            clearcoat={1}
            color="#051020"
          />
        </mesh>

        {/* Glowing Apple-style Screen Content Simulation */}
        <mesh position={[0, 0, 0.15]}>
          <planeGeometry args={[2.3, 4.8]} />
          <meshBasicMaterial color="#0B57D0" transparent opacity={0.1} />
        </mesh>

        {/* Dynamic Island */}
        <RoundedBox args={[0.7, 0.2, 0.05]} radius={0.1} position={[0, 2.1, 0.17]}>
          <meshBasicMaterial color="#000000" />
        </RoundedBox>

        {/* Camera Module Back */}
        <group position={[-0.6, 1.8, -0.16]} rotation={[0, Math.PI, 0]}>
          <RoundedBox args={[0.9, 1, 0.1]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          {/* Lenses */}
          <mesh position={[-0.2, 0.25, 0.05]}>
            <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0} />
          </mesh>
          <mesh position={[-0.2, -0.25, 0.05]}>
            <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0} />
          </mesh>
          <mesh position={[0.2, 0, 0.05]}>
            <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
            <meshStandardMaterial color="#111" metalness={1} roughness={0} />
          </mesh>
        </group>

        {/* Exploded Parts floating around */}
        <Float speed={3} rotationIntensity={1} floatIntensity={2} position={[-2, 1, 0.5]}>
           {/* Battery */}
           <RoundedBox args={[1, 2, 0.1]} radius={0.05}>
              <meshStandardMaterial color="#444" metalness={0.5} roughness={0.5} />
           </RoundedBox>
           <Text position={[0, 0, 0.1]} fontSize={0.15} color="#fff">Battery</Text>
        </Float>

        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5} position={[2, -1, 0.2]}>
           {/* Logic Board (Green/Gold) */}
           <RoundedBox args={[0.8, 1.5, 0.05]} radius={0.05}>
              <meshStandardMaterial color="#103010" metalness={0.8} roughness={0.2} />
           </RoundedBox>
           <Text position={[0, 0, 0.1]} fontSize={0.15} color="#fff">Logic Board</Text>
        </Float>

        <Float speed={4} rotationIntensity={2} floatIntensity={1} position={[1.5, 2, 0]}>
           {/* Camera Lens Component */}
           <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
           <meshStandardMaterial color="#222" metalness={1} roughness={0.1} />
           <Text position={[0, -0.3, 0]} fontSize={0.15} color="#fff">Camera</Text>
        </Float>
      </group>
      
      {/* Studio Lighting Environment */}
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={2} color="#0B57D0" />
    </Float>
  );
}
