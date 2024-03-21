import { useState } from 'react'
import TestComponent from './Test'
import './App.css'
import Footer from './components/shared/footer/Footer'
import Navbar from './components/shared/navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Navbar/>
    <div className="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button className="btn btn-primary">Primary button</button>
    </div>
    <TestComponent/>
    <Footer/>
    </>
  )
}

export default App
