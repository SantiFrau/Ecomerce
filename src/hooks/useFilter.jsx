import { useContext } from "react"
import { Filter_contex } from "../context/filtros.jsx"

import p from "../mooks/products.json"

const products =p.products.map((d)=>{
    return{
     name:d.title,
     img:d.thumbnail,
     price:d.price,
     category:d.category
    }
   })

export const UseFilter=()=>{
    const {filtro} = useContext(Filter_contex)
    
    const filter_products = products.filter(
        (d)=>{
            
          return ( (d.price>=filtro.price)
           &&
            (d.category == filtro.category || filtro.category == "all"))
        }
    )
    
    return {filter_products}
    
}