import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <body>

      <h1>My first SVG</h1>

      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="50" width="100 " height="100" stroke = "blue" fill="green" strokeWidth= "4"/>

      </svg>

      </body>
  )
}

export default App
