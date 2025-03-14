import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={1}/>
      <pointLight intensity={1}/>
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow/>
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.65} position={isMobile ? [0, -2.5, -1]:[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    // add event listener 
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // close event listener becuase we are in useEffect()
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas frameloop='demand' shadows 
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true } }
    >
      <Suspense fallback={ <CanvasLoader /> }>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas