import {AddToCartIcon} from "../mooks/icons.jsx"
import { Contexto_carrito } from "../context/cart_context.jsx"
import { useContext } from "react"

export const Productos =({d})=>{
   
    const {setCarrito} = useContext(Contexto_carrito)

    return(
        <div className="producto">
                   <img className="producto-img" src={d.img}  alt="" />
                   <div className="producto-info">
                   <strong className="producto-name">{d.name}</strong>
                   <p className="producto-price">${d.price}</p>
                   </div>
                   <div className="icon icon-add" onClick={()=>{
                     setCarrito(d)}} >
                   <AddToCartIcon></AddToCartIcon>
                   </div>
                 </div>
    )
}