import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TailwindTest from './components/TailwindTest'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 mb-8">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://vitejs.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vite + React + Tailwind</h1>
        </div>

        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-lg"
          >
            count is {count}
          </button>
          
          <p className="mt-6 text-gray-600">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
          </p>
          
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
            <p className="text-green-700 font-semibold">✅ Tailwind CSS is working!</p>
            <p className="text-green-600 text-sm mt-1">
              This styling is created using Tailwind utility classes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tailwind Test Component */}
      <TailwindTest />
    </div>
  )
}

export default App
