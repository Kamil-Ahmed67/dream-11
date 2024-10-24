import { useState } from "react"
import Banners from "./components/Banners/Banners"
import Navbar from "./components/Navbar/Navbar"

function App() {
const [freeCoins,setFreeCoins]=useState(0)
const handleFreeCoins=()=>{
  const newFreeCoins=freeCoins+60000;
  setFreeCoins(newFreeCoins);
}
  return (
    <>
      {/* Navbar */}
      <Navbar
       handleFreeCoins={handleFreeCoins}
       freeCoins={freeCoins}
       ></Navbar>
      {/* Banner */}
      <Banners handleFreeCoins={handleFreeCoins} ></Banners>
    </>
  )
}

export default App
