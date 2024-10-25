import Banners from "./components/Banners/Banners"
import Navbar from "./components/Navbar/Navbar"
import Toggles from "./components/Toggles/Toggles"
import PlayerCards from "./components/PlayerCards/PlayerCards"
import { useEffect, useState } from "react";
import ChosenPlayers from "./components/ChosenPlayers/ChosenPlayers";

function App() {
  const [freeCoins, setFreeCoins] = useState(0);
  const handleFreeCoins = () => {
    const newFreeCoins = freeCoins + 600000;
    setFreeCoins(newFreeCoins);
  }
  // Fetching all players data
  const [players, setPlayers] = useState([])
  useEffect(() => {
    fetch('team.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
  }, [])
  // Adding chosen players on the ChosenPlayers section
  const [chosenPlayers, setChosenPlayers] = useState([]);
  const addChosenPlayers = (player) => {
    const { biddingPrice } = player;

    if (freeCoins < biddingPrice) {
      alert("You do not have enough coins to choose this player.");
      return;
    }
    if (!chosenPlayers.includes(player)) {
      setChosenPlayers([...chosenPlayers, player]);
    }
    if (chosenPlayers.length >= 6) {
      alert("You have added the maximum number of players.");
    }
  };
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
        <Toggles chosenPlayers={chosenPlayers}></Toggles>
        <PlayerCards players={players} addChosenPlayers={addChosenPlayers} />
        <ChosenPlayers chosenPlayers={chosenPlayers} />
      </main>
    </>
  )
}

export default App
