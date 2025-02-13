"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
        <NebulaClouds />
      </Canvas>
    </div>
  )
}

function StarField() {
  const ref = useRef<THREE.Points>(null!)
  const positions = new Float32Array(5000 * 3)

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.075
  })

  return (
    <Points ref={ref}>
      <PointMaterial size={0.01} color="#ffffff" sizeAttenuation={true} depthWrite={false} />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
    </Points>
  )
}

function NebulaClouds() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.02
  })

  return (
    <mesh ref={ref}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          
          float noise(vec2 p) {
            return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }
          
          void main() {
            vec2 uv = vUv;
            float n = noise(uv * 10.0 + time * 0.1);
            vec3 color = mix(vec3(0.5, 0.0, 0.5), vec3(0.0, 0.5, 1.0), n);
            gl_FragColor = vec4(color, 0.3);
          }
        `}
        vertexShader={`
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          time: { value: 0 },
        }}
        transparent={true}
      />
    </mesh>
  )
}

export function AboutMeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20" />
    </div>
  )
}

export function SkillsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-purple-900 to-indigo-900 opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 transform rotate-45 scale-150">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: "1px",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExperienceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <GridEffect />
      </Canvas>
    </div>
  )
}

function GridEffect() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.1
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <mesh ref={ref}>
      <planeGeometry args={[5, 5, 50, 50]} />
      <shaderMaterial
        fragmentShader={`
          varying vec2 vUv;
          
          void main() {
            vec2 grid = fract(vUv * 10.0);
            float line = smoothstep(0.95, 0.98, max(grid.x, grid.y));
            gl_FragColor = vec4(vec3(line), 0.1 + line * 0.1);
          }
        `}
        vertexShader={`
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        transparent={true}
      />
    </mesh>
  )
}

export function ContactBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "1px",
              height: "100%",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

