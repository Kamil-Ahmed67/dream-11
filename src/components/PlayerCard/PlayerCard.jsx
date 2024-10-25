import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const PlayerCard = ({ player }) => {
    const {name, country, image, role, battingType, bowlingType, biddingPrice
    } = player;
    return (
        <div>
            <div className="card bg-base-100 border-2">
                <figure className="px-6 pt-4">
                    <img className="w-full md:h-56 rounded-xl"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex items-center space-x-2">
                        <FaUserCircle></FaUserCircle>
                        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    </div>
                    <div className="flex justify-between items-center" >
                        <div className="flex items-center text-base space-x-2 text-gray-500">
                          <FaFlag></FaFlag>
                          <h2>{country}</h2>
                        </div>
                        <div className="border-2 p-1 px-2 rounded-lg">
                            <h2 className="text-base">{role}</h2>
                        </div>
                    </div>
                    <div className="border-b-2 mt-2"></div>
                    <h2 className="text-lg text-gray-800 font-semibold">Rating</h2>
                    <div className="flex justify-between items-center">
                       <h1 className="text-base text-gray-800 font-semibold">{battingType}</h1>
                       <h1 className="text-base">{bowlingType}</h1>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <h1 className="text-base text-gray-800 font-semibold">Price:${biddingPrice}</h1>
                        <button className="border-2 text-base text-gray-800 p-2 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
PlayerCard.propTypes = {
    player: PropTypes.object.isRequired
}
export default PlayerCard;