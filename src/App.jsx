import { useState } from 'react'
import TestComponent from './Test'
import './App.css'
import Footer from './components/shared/footer/Footer'
import Navbar from './components/shared/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return(
    <>
     <Router>
      <Navbar/>
     </Router>
    <Footer/>
    </>
  )
}

export default App
