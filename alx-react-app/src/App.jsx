import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <div style={{ marginTop: '20px' }}>
        <h2>Vite + React</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
