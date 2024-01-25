import {Route, Routes} from 'react-router-dom'

import Users from "./components/Users"
import UsersDetail from './components/UsersDetail'
import Products from './components/Products'
import Category from './components/category'
import ProductList from './components/ProductList'






const App = ()=> {

  return (
    <>
    <p className='l'>Listado de totales </p> 
    <div className='total'>
      <Users/>
      <Products/>
      <Category/>
    </div>
    <p className='listado-productos'>Listado de Productos</p>
    <div>
      <ProductList/>
    </div>


    </>
  )
}

export default App
