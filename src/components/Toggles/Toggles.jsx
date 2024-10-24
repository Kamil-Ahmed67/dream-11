const Toggles = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center">
            <div>
               <h3 className="text-lg md:text-2xl text-gray-800 font-semibold md:fon-bold">Available Players</h3>
            </div>
            <div className="flex">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded-l-lg">Available</button>
              <button className="bg-gray-100 text-gray-400 py-2 px-4 rounded-r-lg">Selected</button>
            </div>
        </div>
    );
};

export default Toggles;
