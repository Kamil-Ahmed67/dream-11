import Banners from "./components/Banners/Banners"
import Navbar from "./components/Navbar/Navbar"
import Toggles from "./components/Toggles/Toggles"
import PlayerCards from "./components/PlayerCards/PlayerCards"
import { useState } from "react";

function App() {
  const [freeCoins, setFreeCoins] = useState(0);
  const handleFreeCoins = () => {
    const newFreeCoins = freeCoins + 60000;
    setFreeCoins(newFreeCoins);
  }
  return (
    <>
      <header>
        {/* Navbar */}
        <Navbar
          handleFreeCoins={handleFreeCoins}
          freeCoins={freeCoins}
        ></Navbar>
        {/* Banner */}
        <Banners handleFreeCoins={handleFreeCoins} ></Banners>
      </header>
      <main className="mt-14">
        {/* Available Players and Toggle Button */}
        <Toggles></Toggles>
        {/* Players Card */}
        <PlayerCards ></PlayerCards>
      
      </main>
    </>
  )
}

export default App
