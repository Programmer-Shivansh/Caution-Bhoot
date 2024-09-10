import Experience from "./components/Experience"
import { Canvas } from "@react-three/fiber"
import Interfaces from "./components/Interface"
function App() {

  return (
    <>
      <Interfaces/>
        <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 90 }} style={{ width: '100vw', height: '100vh', display: 'block' }}>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
