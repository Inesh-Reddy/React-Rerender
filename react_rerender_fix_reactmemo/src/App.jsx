
import  React from 'react'
import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("7");
  
  function random(){
    const result = Math.random();
    setTitle(result);
  }

  return (
    <div> 
      <button onClick={random}> Click Me!!</button><br />
      <Header title={"Random number :" + title}></Header><br />
      <Header title={"Inesh Reddy"}></Header><br />
      <Header title={"Inesh Reddy"}></Header><br />
      <Header title={"Inesh Reddy"}></Header><br />
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
