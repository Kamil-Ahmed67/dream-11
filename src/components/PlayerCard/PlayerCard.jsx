import PropTypes from "prop-types";

const PlayerCard = ({ player }) => {
    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice
    } = player;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-6 pt-4">
                    <img className="w-full md:h-56 rounded-xl"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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