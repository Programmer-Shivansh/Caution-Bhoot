import { createContext,useState,useContext } from "react";

const CharacterAnimations = createContext();
export  const CharacterAnimationsProvider = (props)=>{

    const [animations, setAnimations] = useState([]);
    const [animationsIndex, setAnimationsIndex] = useState(0);
     return (
         <CharacterAnimations.Provider value={{
                animations,
                setAnimations,
                animationsIndex,
                setAnimationsIndex
         }}
         >
            {props.children}
        </CharacterAnimations.Provider>
            
     )
  }

export const useCharacterAnimations = ()=>{
    return useContext(CharacterAnimations)
}