import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Inesh")

function random(){
  const result =Math.random();
  setTitle(result);
  // return result;
}
  return (
    <div>
      <button onClick={random}>Click Me!!</button>
      <Header title={"New Number is : "+ title}></Header><br />
      <Header title="Inesh Reddy"></Header><br />
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
