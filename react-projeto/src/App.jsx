import { useState } from 'react'
import './App.css'
import FotoeTexto from './components/FotoeTexto.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FotoeTexto />
    </>
  )
}

export default App
