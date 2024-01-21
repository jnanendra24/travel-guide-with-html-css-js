import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import Contactus from "./components/Contactus"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact-us" element={<Contactus />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
