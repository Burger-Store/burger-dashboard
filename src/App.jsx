import {Route, Routes} from 'react-router-dom'

import Users from "./components/users"
import Home from "./components/Header"
import UsersDetail from './components/UsersDetail'
import './assets/styles.css'

const App = ()=> {

  return (
    <> 
    <Home/>
    <Routes>
     <Route path='/api/users' element = {<Users />}/>
     <Route path='/api/users/:id' element ={<UsersDetail />}/>
      </Routes>
    </>
  )
}

export default App
