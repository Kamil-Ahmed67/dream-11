import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
const ChosenPlayer = ({ chosenP ,handleRemove}) => {
    const {playerId}=chosenP;
    return (
        <div className="bg-white p-4 mb-2 rounded-lg border-2 shadow-md flex justify-between items-center ">
            <div className="flex space-x-4 items-center">
                <div>
                    <img  className="h-24 w-28 rounded-xl object-cover"  src={chosenP.image}></img>
                </div>
                <div className="space-y-2">
                    <h1 className="text-lg md:text-xl text-gray-800 font-semibold">{chosenP.name}</h1>
                    <p className="font-semibold text-sm md:text-base text-gray-800">{chosenP.role}</p>
                    <p className="font-semibold text-sm md:text-base text-gray-500">{chosenP.battingType}</p>
                </div>
            </div>
            <div>
                <RiDeleteBin6Line onClick={()=>handleRemove(playerId)}
                 className="cursor-pointer text-lg md:text-xl hover:text-red-600"></RiDeleteBin6Line>
            </div>
        </div>
    );
};
ChosenPlayer.propTypes = {
    chosenP: PropTypes.object.isRequired,
    handleRemove:PropTypes.func.isRequired
}
export default ChosenPlayer;