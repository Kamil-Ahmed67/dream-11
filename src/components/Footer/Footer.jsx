import FooterImg from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-black'>

            <footer className="text-base-content p-10 mt-16 flex flex-col lg:flex-row justify-between">
                {/* Column-1 */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
                    <div className="flex items-center gap-3 font-bold justify-center lg:justify-start">
                        <span className="text-gray-300 text-lg font-extrabold">About Us</span>
                    </div>
                    <div className="text-sm text-gray-300 mt-4">
                        <p>We are a passionate team</p>
                        <p>dedicated to providing the best</p>
                        <p>services to our customers.</p>
                    </div>
                    <div className="flex items-center gap-x-4 mt-4 justify-center lg:justify-start">
                        <i className="fa-brands text-3xl text-white fa-square-facebook"></i>
                        <i className="fa-brands text-3xl text-white fa-square-x-twitter"></i>
                        <i className="fa-brands text-3xl text-white fa-youtube"></i>
                        <i className="fa-brands text-3xl text-white fa-instagram"></i>
                    </div>
                </div>

                {/* Column-2 */}
                <div className="flex flex-col items-center lg:items-start text-center text-white lg:text-left mb-8 lg:mb-0">
                    <h3 className="font-bold text-gray-300 text-lg">Useful Links</h3>
                    <a className="hover:text-yellow-500 text-base text-gray-300 cursor-pointer">Home</a>
                    <a className="hover:text-yellow-500 text-base text-gray-300 cursor-pointer">Services</a>
                    <a className="hover:text-yellow-500 text-base text-gray-300 cursor-pointer">About Us</a>
                    <a className="hover:text-yellow-500 text-base text-gray-300 cursor-pointer">Contact</a>
                </div>

                {/* Column-3 */}
                <div className='md:w-1/3'>
                    <div className='items-center md:items-start'>
                        <div className='flex flex-col items-center text-white text-center lg:items-start lg:text-left'>
                            <h3 className='text-lg font-semibold text-gray-300 mb-2'>Subscribe</h3>
                            <p className='text-sm text-gray-300 mb-4'>Subscribe to our newsletter for the latest updates</p>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <input type="email" placeholder="Enter your email" className="py-3 px-5 w-full rounded-l-xl focus:outline-none" />
                        <button className="py-3 px-5 bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-800 font-bold rounded-r-xl">Subscribe</button>
                    </div>
                </div>
            </footer>
            <hr className="border-t border-gray-700 w-full" />
            <p className='text-center text-sm text-gray-300 p-5'>@2024 Your Company All Rights Reserved</p>
                  
        </div>
    );
};

export default Footer;