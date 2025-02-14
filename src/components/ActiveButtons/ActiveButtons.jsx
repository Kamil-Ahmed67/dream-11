import PropTypes from "prop-types";

const ActiveButtons = ({ chosenPlayers, handleIsActiveState, isActive }) => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center">
            <div>
                <h3 className={`${isActive.card ? 'text-base md:text-2xl text-gray-800 font-semibold md:font-bold' : 'hidden'}`}>
                    Available Players
                </h3>
                <h3 className={`${!isActive.card ? 'text-base md:text-2xl text-gray-800 font-semibold md:font-bold' : 'hidden'}`}>
                    Selected Players <span>({chosenPlayers.length}/6)</span>
                </h3>
            </div>
            <div className="flex">
                <button
                    onClick={() => handleIsActiveState("playerCard")}
                    className={`${isActive.card ? 'bg-yellow-400 text-black text-sm md:text-lg font-semibold' : 'bg-gray-100 text-gray-400 text-sm md:text-lg'} py-2 px-2 md:px-4 rounded-l-lg`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleIsActiveState("selectedPlayer")}
                    className={`${!isActive.card ? 'bg-yellow-400 text-black text-sm md:text-lg font-semibold ' : 'bg-gray-100 text-gray-400 text-sm md:text-lg'} py-2 px-2 md:px-4 rounded-r-lg`}
                >
                    Selected ({chosenPlayers.length})
                </button>
            </div>
        </div>

    );
};
ActiveButtons.propTypes = {
    chosenPlayers: PropTypes.array.isRequired,
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
}
export default ActiveButtons;