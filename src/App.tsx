import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:opacity-80">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:opacity-80">
            <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vite + React</h1>
        <div className="mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <p className="text-green-800 font-semibold">🎉 Tailwind CSS is working!</p>
        </div>
      </div>
    </div>
  )
}

export default App
