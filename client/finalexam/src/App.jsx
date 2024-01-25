
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddPage from './Pages/AddPage'
import Detail from './Pages/Detail'
import Wishlist from './Pages/Wishlist'
import HomePage from './Pages/Home'
import Layout from './Layout/Layout'
import { HelmetProvider } from 'react-helmet-async'
import Features from './Pages/Features'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'


function App() {


  return (
    <HelmetProvider>

<BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/addpage/" element={<AddPage/>} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/wishlist/" element={<Wishlist/>} />
      <Route path="/features/" element={<Features/>} />
      <Route path="/gallery/" element={<Gallery/>} />
      <Route path="/shop/" element={<Shop/>} />
      

      </Route>
    </Routes>
  </BrowserRouter>
  



    </HelmetProvider>
  )
    
}

export default App
