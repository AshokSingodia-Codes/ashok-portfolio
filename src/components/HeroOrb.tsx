import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'
function Blob() {
  const ref = useRef<Mesh>(null)
  useFrame(({ pointer }) => {
    const m = ref.current; if (!m) return
    m.rotation.y += (pointer.x * 0.9 - m.rotation.y) * 0.05
    m.rotation.x += (-pointer.y * 0.6 - m.rotation.x) * 0.05
  })
  return <Float speed={1.4} floatIntensity={0.8}><mesh ref={ref}><icosahedronGeometry args={[1.5, 12]} /><MeshDistortMaterial color="#35b59f" distort={0.35} speed={1.4} roughness={0.25} /></mesh></Float>
}
export default function HeroOrb() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} aria-hidden="true">
    <ambientLight intensity={1.1} /><directionalLight position={[3, 3, 4]} intensity={1.6} color="#ffd9a0" /><directionalLight position={[-4, -2, 2]} intensity={1.4} color="#ff8fb1" /><Blob />
  </Canvas>
}
