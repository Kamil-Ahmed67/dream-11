import Shadow from '../../assets/images/bg-shadow.png'
import Cricket from '../../assets/images/banner-main.png'
import PropTypes from 'prop-types';
const Banners = ({handleFreeCoins}) => {
    return (
        <div className="w-11/12 mx-auto bg-black rounded-xl">
            <div className='relative'>
                <img className='md:w-full rounded-xl' src={Shadow} alt="shadow-png" />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <img className='w-16 md:w-56 mb-2 md:mb-4' src={Cricket} alt="cricket-logo" />
                    <h3 className='text-sm md:text-3xl font-semibold md:font-bold text-white mb-2 md:mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                    <p className='text-gray-400 text-xs md:text-xl font-semibold'>Beyond Boundaries Beyond Limits </p>
                    <button onClick={handleFreeCoins}
                     className='bg-gradient-to-r from-purple-400 to-yellow-500 text-sm md:text-xl p-2 md:p-4 rounded-xl font-semibold mt-2 md:mt-4'>Claim Free Coin</button>
                </div>
            </div>
        </div>

    );
};
Banners.propTypes={
    handleFreeCoins:PropTypes.func.isRequired
}
export default Banners;