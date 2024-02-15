import './App.css'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages 
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

// components
import Nav from './Components/Nav'

function App() {
  

  return ( 
      <BrowserRouter>  
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="search" element={<Search />}/>
        </Routes>
      </BrowserRouter>  
  )
}

export default App
