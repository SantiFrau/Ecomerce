import {ClearCartIcon,RemoveFromCartIcon,CartIconXl} from "../mooks/icons.jsx"
import { Contexto_carrito } from "../context/cart_context.jsx"
import { useContext} from "react"
import { Productos } from "./Productos.jsx"


export const Carrito = ()=>{
    const {setVerCarrito,carrito,clearCarrito,removeCarrito} = useContext(Contexto_carrito)



    return (
        <div className="fondo">
        <div className="carrito">
            <div className="opciones">
                <button className="x" onClick={()=>{setVerCarrito(false)}} >x</button>
                <p className="carrito-p">Cart</p> 
                <div className="banner">
               <CartIconXl></CartIconXl>
                </div>
                <div className="clear" onClick={clearCarrito}>
                <ClearCartIcon></ClearCartIcon>
                </div>
            </div>
            
        <section className="productos">
          {
            (carrito.length>0) ?
            carrito.map((d,i)=>{
                
             return(
                <div className="producto-cart" key={i}>
                <Productos d={d} ></Productos>

                <div className="producto-cantidad">
                <p>Cantidad solicitada:{d.cantidad}</p>
                <div className="icon icon-remove" onClick={()=>{removeCarrito(d)}}>
                <RemoveFromCartIcon></RemoveFromCartIcon>
                </div>

                
                </div>
                
                </div>
                )
            })
            : ""
          }
           </section>
        </div>
        </div>
    )
}