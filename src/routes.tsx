import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Checkout from './pages/Checkout'
import About from './pages/About'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
    <Route path="/about" element={<About />}></Route>
  </Routes>
)

export default Rotas
