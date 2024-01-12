import ReactDOM from 'react-dom/client'
import {App} from './componentes/App.jsx'
import { Provider_context } from './context/filtros.jsx'
import { Provider_carrito } from './context/cart_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

 <Provider_context>
    <Provider_carrito>
  <App></App>
  </Provider_carrito>
 </Provider_context>
  
)
