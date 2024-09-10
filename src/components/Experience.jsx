import { OrbitControls } from "@react-three/drei";
import Bhootiya from "./Bhoot";
const Experience = () => {
    
    return (
        <>
        <OrbitControls />   
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
        <group position={[0, -1, 0]}>
        <Bhootiya />
        </group>
        </>
    );
    }

export default Experience; 