import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store'
import LoadingScreen from '../ui/LoadingScreen'
import NoiseOverlay from '../ui/NoiseOverlay'
import Scene from './Scene'

function Backdrop() {
  const setActive = useStore((state) => state.setActive)

  return (
    <mesh position={[0, 0, -40]} onClick={() => setActive(null)}>
      <planeGeometry args={[600, 300]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

export default function SceneExperience() {
  return (
    <>
      <LoadingScreen />

      <div className="scene-bg">
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 5, 19], fov: 39, near: 0.1, far: 500 }}
          gl={{
            antialias: false,
            stencil: false,
            depth: true,
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
        >
          <color attach="background" args={['#0a0e16']} />
          <Suspense fallback={null}>
            <Backdrop />
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <NoiseOverlay />
    </>
  )
}
