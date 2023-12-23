import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './components/Experience'
import Overlay from './components/Overlay'

function App() {
  return (
    <>
    <Overlay/>
    <Canvas>
      <Experience/>
    </Canvas>
    </>
  )
}

export default App
