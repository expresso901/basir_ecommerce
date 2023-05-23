import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        TS Amazon
      </header>
      <main>
        <ul>
          {sampleProducts.map((product) => <li>
            <h2>{product.name}</h2>
          </li>)}
        </ul>
      </main>
      <footer>
        all right reserved
      </footer>
    </div>
  )
}

export default App
