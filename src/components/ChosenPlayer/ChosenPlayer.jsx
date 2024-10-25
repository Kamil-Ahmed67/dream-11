import PropTypes from "prop-types";

const ChosenPlayer = ({ chosenP }) => {
    return (
        <div className="bg-white p-4 mb-2 rounded-lg border-2 shadow-md">
            <h1 className="text-lg font-semibold">Chosen Player: {chosenP.name}</h1>
        </div>
    );
};
ChosenPlayer.propTypes = {
    chosenP: PropTypes.object.isRequired
}
export default ChosenPlayer;