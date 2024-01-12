import { createContext } from "react";
import { useState } from "react";

export const Filter_contex = createContext()

export const Provider_context = ({children})=>{ 
    
    const [filtro,setFiltro] = useState({
        price:0,
        category:"all"
    })

    return ( 
        <Filter_contex.Provider value={
            {
                filtro,
                setFiltro
            }
        } >
          {children }
        </Filter_contex.Provider>
    )
}