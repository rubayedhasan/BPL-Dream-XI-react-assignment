import PropTypes from "prop-types";
import PlayerCart from "../PlayerCart/PlayerCart";

const PlayersCart = ({ carts }) => {
  return (
    <div className="mt-[1.92rem]">
      {/* players carts container  */}
      <div className="space-y-[1.12rem] md:space-y-[1.44rem]">
        {carts.map((cart, idx) => (
          <PlayerCart key={idx} cart={cart}></PlayerCart>
        ))}
      </div>

      {/* add more players button  */}
      <div className="mt-8 md:mt-[2.88rem] p-1.5 md:p-2 border border-[#131313] rounded-[0.85rem] md:rounded-[0.96rem] bg-white/5 inline-block hover:inset-ring-2 hover:inset-ring-yellow-900 transition duration-500 ease-in-out">
        <button
          className="font-bold text-[0.85rem] md:text-[0.96rem] text-[#131313] bg-[#E7FE29] rounded-[0.65rem] md:rounded-[0.72rem] px-4 py-3 md:px-[1.2rem] md:py-[0.84rem] cursor-pointer hover:inset-ring-1 hover:inset-ring-yellow-800 transition-all duration-500 ease-in-out"
          type="button"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

// define the propTypes
PlayersCart.propTypes = {
  carts: PropTypes.array.isRequired,
};

export default PlayersCart;
