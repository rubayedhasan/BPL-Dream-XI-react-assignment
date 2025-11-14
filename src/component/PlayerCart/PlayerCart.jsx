import PropTypes from "prop-types";
import { GiTrashCan } from "react-icons/gi";

const PlayerCart = ({ cart, handleRemovePlayer }) => {
  const { name, image, bowlingType } = cart;

  return (
    <div className="p-[1.44rem] flex justify-between items-center gap-[1.44rem] border border-[#1313131A] rounded-[0.96rem]">
      {/* player information  container*/}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-[0.85rem] md:gap-[1.44rem]">
        {/* player image  */}
        <figure className=" md:w-24 md:h-24 lg:w-[4.8rem] lg:h-[4.38rem] flex justify-center items-center">
          <img
            src={image}
            alt={`image of &{name}`}
            className="w-full object-contain"
          />
        </figure>

        {/* player info */}
        <div>
          <h6 className="font-semibold text-[1rem] md:text-[1.25rem] lg:text-[1.44rem] text-[#131313]">
            {name}
          </h6>
          <p className="text-[0.85rem] lg:text-[0.96rem] text-[#13131399]">
            {bowlingType}
          </p>
        </div>
      </div>

      {/* remove to cart button container  */}
      <div>
        <button
          onClick={() => {
            handleRemovePlayer(cart);
          }}
          className="text-[#F14749] text-3xl cursor-pointer"
          type="button"
        >
          <GiTrashCan />
        </button>
      </div>
    </div>
  );
};

// define the propTypes
PlayerCart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleRemovePlayer: PropTypes.func,
};

export default PlayerCart;
