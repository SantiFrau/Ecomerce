import { useContext } from "react"
import { Filter_contex } from "../context/filtros.jsx"



export const Header = () =>{

    const {filtro,setFiltro} = useContext(Filter_contex)

    const rango = (e)=>{
       
        const c = filtro.category
       setFiltro({price:e.target.value,category:c})
     }

    const categoria = (e)=>{
       
         const c = filtro.price
        setFiltro({category:e.target.value,price:c})
    }

    return(
        <header>
      <form action="#" className="filtros">
        <div className="filtros-item">
        <label htmlFor="r">Precio minimo</label>
        <input id="r" type="range" min={0} max={3000} onChange={rango} />
        <p>{filtro.price}</p>
        </div>
    
        <div className="filtros-item">
        <label htmlFor="s">Categoria</label>
        <select name="" id="s" className="select" onChange={categoria} >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          
        </select>
        </div>
      </form>
    </header>
    )
}