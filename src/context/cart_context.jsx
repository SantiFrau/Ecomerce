import { createContext, useState } from "react";

export const Contexto_carrito = createContext()

export const Provider_carrito = ({children})=>{
    
    const [carrito,setCart] = useState([])
    const [verCarrito,setVerCarrito] = useState(false)
    
    const setCarrito =(prod)=>{

        const indice=carrito.findIndex((d)=>{
          return  d.name==prod.name
         }) 

        if( indice === -1  ){
            const producto = {
                ...prod,
                cantidad:1
                
            }
            setCart([...carrito , producto])
         } else{

            const new_carrito =[...carrito]
            new_carrito[indice].cantidad++;
            
            setCart(new_carrito)
            
         }

    }

    const clearCarrito=()=>{
        setCart([])

    }

    const removeCarrito =(prod)=>{

        const indice=carrito.findIndex((d)=>{
            return  d.name==prod.name
           }) 
  
          //eliminarlo si le queda uno y restamos
           if(carrito[indice].cantidad==1){
            const new_carrito = [...carrito]
            new_carrito.splice(indice,1)
            setCart(new_carrito)

           } else{
  
              const new_carrito =[...carrito]
              new_carrito[indice].cantidad--;
              
              setCart(new_carrito)}
              
           
    }

    return(
        <Contexto_carrito.Provider value={
            {
                verCarrito,setVerCarrito,
               carrito,setCarrito,clearCarrito,
               removeCarrito
            }
        }>
            {children}
        </Contexto_carrito.Provider>
    )
}
