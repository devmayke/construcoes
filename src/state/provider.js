import { useState } from "react";
import context from "./context";



export default function Provider({children}){
    const [scroll, setScroll] = useState();

    return(
        <context.Provider value={{scroll, setScroll}} >
            {children}
        </context.Provider>
    )
}