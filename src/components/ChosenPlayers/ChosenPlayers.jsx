import PropTypes from "prop-types";
import ChosenPlayer from "../ChosenPlayer/ChosenPlayer";

const ChosenPlayers = ({chosenPlayers}) => {
    return (
        <div className="w-11/12 mx-auto">
            {
                chosenPlayers.map((chosenP,idx)=><ChosenPlayer key={idx} chosenP={chosenP} ></ChosenPlayer>)
            }
        </div>
    );
};
ChosenPlayers.propTypes={
    chosenPlayers:PropTypes.object.isRequired
}
export default ChosenPlayers;
