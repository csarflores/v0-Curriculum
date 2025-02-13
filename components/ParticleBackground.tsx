"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function ParticlesInstance({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      points.current.geometry.attributes.position.array[i3] += Math.sin(time + positions[i3]) * 0.001
      points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + positions[i3 + 1]) * 0.001
      points.current.geometry.attributes.position.array[i3 + 2] += Math.sin(time + positions[i3 + 2]) * 0.001
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={points}>
      <PointMaterial transparent color="#8888ff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
    </Points>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticlesInstance />
      </Canvas>
    </div>
  )
}

