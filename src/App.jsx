import Experience from "./components/Experience"
import { Canvas } from "@react-three/fiber"
function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        {/* <p>Canvas is not supported in your browser.</p> */}
        <Experience />
      </Canvas>
    </>
  )
}

export default App
