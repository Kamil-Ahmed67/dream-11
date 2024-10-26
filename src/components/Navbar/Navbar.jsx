import Logo from '../../assets/images/logo.png'
import Coin from '../../assets/images/coin.png'
import PropTypes from 'prop-types';
const Navbar = ({freeCoins}) => {
    return (
            <div className='w-11/12 mx-auto flex justify-between items-center p-4'>
            <div>
                <img className='w-18 h-18' src={Logo} alt="Logo-img" />
            </div>
            <div className='flex items-center gap-2'>
                <ul className="list-none gap-x-2 hidden md:flex">
                    <li> <button className='p-4 font-semibold rounded-xl text-base hover:text-yellow-600 transition duration-300 ease-in-out'>Home</button> </li>
                    <li> <button className='p-4 font-semibold rounded-xl text-base hover:text-yellow-600 transition duration-300 ease-in-out'>Fixture</button> </li>
                    <li> <button className='p-4 font-semibold rounded-xl text-base hover:text-yellow-600 transition duration-300 ease-in-out'>Teams</button> </li>
                    <li> <button className='p-4 font-semibold rounded-xl text-base hover:text-yellow-600 transition duration-300 ease-in-out'>Schedule</button> </li>
                </ul>
                <div className='flex gap-1 border-2 p-2 md:p-4 text-sm md:text-base font-semibold rounded-xl cursor-pointer'>
                    <span>{freeCoins}</span><p>Coin</p>
                    <img className='w-4 md:w-6 h-4 md:h-6' src={Coin} alt="Coin-img" />
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes={
    freeCoins: PropTypes.number.isRequired,
}
export default Navbar;