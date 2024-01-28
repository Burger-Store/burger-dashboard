import {Route, Routes} from 'react-router-dom'

import Users from "./components/Users"
import Products from './components/Products'
import ProductList from './components/ProductList'
import LastProduct from './components/LastProduct'
import CategoryBurger from './components/CategoryBurger'
import CategoryDrinks from './components/CategoryDrinks'
import Category from './components/Category'

const App = ()=> {

  return (
    <>
    <p className='title-total'>Listado de totales </p> 
    <div className='total'>
      <Users/>
      <Products/>
      <Category/>
    </div>
    <div className='last-category'>
      <LastProduct/>
      <div className='categoryList'>
      <CategoryBurger/>
      <CategoryDrinks/>
      </div>
    </div>
    <p className='listado-productos'>Listado de Productos</p>
    <div>
      <ProductList/>
    </div>


    </>
  )
}

export default App
