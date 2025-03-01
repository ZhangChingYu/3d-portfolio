import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0,Math.PI/2-0.4,0]}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation={[0,0,0]} map={decal} scale={1.4}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default BallCanvas