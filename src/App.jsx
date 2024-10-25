import Banners from "./components/Banners/Banners"
import Navbar from "./components/Navbar/Navbar"
import PlayerCards from "./components/PlayerCards/PlayerCards"
import { useEffect, useState } from "react";
import ChosenPlayers from "./components/ChosenPlayers/ChosenPlayers";
import ActiveButtons from "./components/ActiveButtons/ActiveButtons";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";

function App() {
  const [freeCoins, setFreeCoins] = useState(0);
  const handleFreeCoins = () => {
    const newFreeCoins = freeCoins + 600000;
    setFreeCoins(newFreeCoins);
  };
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
      toast.error("You don't have enough coins to choose this player.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (chosenPlayers.includes(player)) {
      toast.warn(`${player.name} is already in your team!`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (chosenPlayers.length >= 6) {
      toast.warning("You have added the maximum number of players.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    if (!chosenPlayers.includes(player)) {
      setChosenPlayers([...chosenPlayers, player]);
      toast.success(`${player.name} has been added to your team!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  const [isActive, setIsActive] = useState({
    card: true,
    status: "playerCard"
  });
  const handleIsActiveState = (status) => {
    if (status == "playerCard") {
      setIsActive({
        card: true,
        status: "playerCard"
      });
    } else {
      setIsActive({
        card: false,
        status: 'selectedPlayer'
      });
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
        <ActiveButtons chosenPlayers={chosenPlayers}
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
        ></ActiveButtons>
        {/* <PlayerCards players={players} addChosenPlayers={addChosenPlayers} /> */}
        {isActive.card ? (
          <PlayerCards players={players} addChosenPlayers={addChosenPlayers} ></PlayerCards>
        ) : (
          <ChosenPlayers chosenPlayers={chosenPlayers}></ChosenPlayers>
        )}
        <Footer></Footer>
        {/* Toast-Container */}
        <ToastContainer />
      </main>
    </>
  )
}

export default App
