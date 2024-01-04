
import { myContext } from './Context Api/Context'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavbarComponent from './Components/navbar'



function App() {


  return (
 <myContext.Provider>
 <NavbarComponent/>
 <Routes>

 <Route path='/' element={<Home/>}/>  

 </Routes>
 
 </myContext.Provider>
      
  )
}

export default App
