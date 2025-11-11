import PropTypes from "prop-types";
import PlayerCart from "../PlayerCart/PlayerCart";

const PlayersCart = ({ carts }) => {
  return (
    <div className="mt-[1.92rem] space-y-[1.12rem] md:space-y-[1.44rem]">
      {carts.map((cart, idx) => (
        <PlayerCart key={idx} cart={cart}></PlayerCart>
      ))}
    </div>
  );
};

// define the propTypes
PlayersCart.propTypes = {
  carts: PropTypes.array.isRequired,
};

export default PlayersCart;
