import PropTypes from "prop-types";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useEffect, useState } from "react";

const PlayerCards = () => {
    const [players,setPlayers]=useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(response=>response.json())
        .then(data=>setPlayers(data))
      },[])
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* <h1>Players:{players.length}</h1> */}
            {
                players.map((player,index)=><PlayerCard key={index} player={player}></PlayerCard>)
            }
        </div>
    );
};
PlayerCards.propTypes={
    players:PropTypes.object.isRequired
}
export default PlayerCards;