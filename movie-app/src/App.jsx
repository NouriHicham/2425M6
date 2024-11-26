import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { MovieCard } from './MovieCard'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <MovieCard/>
      <div className="container">
        <div className="row">
          <h3></h3>
          <div className="col"> 
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div className="col">
          <button onClick={() => setCount(count - 1)}>-</button>
          </div>
          <p>{count}</p>
        </div>
      </div>
      <Footer/>
    </>
  )
  
}

export default App
