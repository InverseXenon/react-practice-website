import './App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/Navbar'

function App() {  
  return (
    <main className="main-content">
      <div>
        <NavBar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/favorites' element= {<Favorites/>}/>
      </Routes>
      </div>
    </main>
    
  ) 
}

export default App
