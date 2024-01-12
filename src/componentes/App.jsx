import { Productos } from "./Productos.jsx"
import "../estilos/app.css"
import "../estilos/carrito.css"
import { CartIcon } from "../mooks/icons.jsx"
import { Header } from "./header.jsx"
import { UseFilter } from "../hooks/useFilter.jsx"
import { useContext } from "react"
import { Carrito } from "./carrito.jsx"
import {Contexto_carrito} from "../context/cart_context.jsx"
import { Footer } from "./footer.jsx"


export const App=()=>{
  
   
   const {filter_products} = UseFilter()
   const {verCarrito,setVerCarrito}= useContext(Contexto_carrito)
  
  return (
    <>

    
    <Header></Header>


    {
     verCarrito ? 
    <Carrito />
    :
    <div className="carrito-icon" onClick={()=>{setVerCarrito(true)}}>
      <CartIcon></CartIcon>
    </div>
    }


    <section className="contenedor">
      
      {
      filter_products!=undefined ?  
          filter_products.map((d,i)=>{
          return <Productos d={d} key={i}></Productos> 
                 
        })
        
        : ""
      
      } 

    </section>
    <Footer></Footer>
    </>
  )
}