import PropTypes from "prop-types";
import PlayerCard from "../PlayerCard/PlayerCard";
const PlayerCards = ({players,addChosenPlayers}) => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {/* <h1>Players:{players.length}</h1> */}
            {
                players.map((player,index)=><PlayerCard 
                key={index}
                 player={player}
                 addChosenPlayers={addChosenPlayers}
                 ></PlayerCard>)
            }
        </div>
    );
};
PlayerCards.propTypes={
    players:PropTypes.object.isRequired,
    addChosenPlayers:PropTypes.func.isRequired
}
export default PlayerCards;