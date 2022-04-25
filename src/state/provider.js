import { useState } from "react";
import context from "./context";



export default function Provider({children}){
    const [isEnviado, setIsEnviado] = useState(false);

    return(
        <context.Provider value={{isEnviado, setIsEnviado}} >
            {children}
        </context.Provider>
    )
}