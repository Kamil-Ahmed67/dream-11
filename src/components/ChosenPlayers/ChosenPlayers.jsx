import PropTypes from "prop-types";
import ChosenPlayer from "../ChosenPlayer/ChosenPlayer";

const ChosenPlayers = ({chosenPlayers,handleRemove,handleIsActiveState}) => {
    return (
        <div className="w-11/12 mx-auto mt-8 mb-48">
            {
                chosenPlayers.map((chosenP,idx)=><ChosenPlayer key={idx} chosenP={chosenP} handleRemove={handleRemove}  ></ChosenPlayer>)
            }
           <div className="mt-8">
            <div>
                
            </div>
           <button  onClick={()=>handleIsActiveState("playerCard")}
            className="py-2 md:py-3 px-3 md:px-5 bg-yellow-400  hover:bg-gradient-to-r from-purple-400 to-yellow-500 transition duration-400 ease-in-out text-gray-800 text-base md:text-lg font-semibold rounded-xl">
             Add More Player
            </button>
           </div>
        </div>
    );
};
ChosenPlayers.propTypes={
    chosenPlayers:PropTypes.object.isRequired,
    handleRemove:PropTypes.func.isRequired,
    handleIsActiveState:PropTypes.func.isRequired
}
export default ChosenPlayers;
