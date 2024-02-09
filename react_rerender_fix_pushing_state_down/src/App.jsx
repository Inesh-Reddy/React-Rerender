import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="Inesh reddy-1"></Header><br />
      <Header title="Inesh reddy-2"></Header><br />
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("Hello")

  function random(){
    const result = Math.random();
    setTitle(result);
  }
  return <div>
    <button onClick={random}>Click Me!!</button>
    <Header title={"random numner :"+ title}></Header><br />
  </div>
  
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
