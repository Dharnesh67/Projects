import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatpage from './components/chatpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-screen'>
        <Chatpage/>
      </div>
    </>
  )
}

export default App
