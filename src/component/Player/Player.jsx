import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa6";
import { BsFlagFill } from "react-icons/bs";

const Player = ({ player, handleStorePlayers }) => {
  const { name, image, country, role, bowlingType, biddingPrice } = player;
  return (
    <div className="p-[1.56rem] border border-[#1313131A] rounded-[0.96rem]">
      {/* picture of the player  */}
      <figure className="w-full mb-[1.44rem]">
        <img src={image} alt={name} className=" w-full object-contain" />
      </figure>

      {/* player name  */}
      <h4 className="flex items-center gap-[0.96rem] text-[#131313] text-base md:text-[1.2rem] font-semibold">
        <span>
          <FaUser />
        </span>{" "}
        {name}
      </h4>

      {/* player info  */}
      <div className="flex justify-between items-center mt-[0.96rem] pb-[0.96rem] border-b border-[#1313131A]">
        <p className="flex items-center gap-[0.72rem] text-[0.85rem] md:text-[0.96rem] text-[#13131366]">
          <span>
            <BsFlagFill />
          </span>{" "}
          {country}
        </p>
        <p className="text-[#131313] text-[0.75rem] md:text-[0.85rem] px-[0.96rem] py-[0.55rem] bg-[#1313130D] rounded-lg">
          {role}
        </p>
      </div>

      {/* rating text  */}
      <h5 className="mt-[0.96rem] font-bold text-[0.85rem] md:text-[0.96rem]">
        Rating
      </h5>

      {/* bowling type  */}
      <div className="flex justify-between items-center text-[0.85rem] md:text-[0.96rem] mt-[0.96rem]">
        <p className="text-[#131313] font-semibold">{bowlingType}</p>
        <p className="text-[#131313B3] text-right">{bowlingType}</p>
      </div>

      {/* selection info  */}
      <div className="flex justify-between items-center gap-5 mt-[0.96rem]">
        <p className="text-[#131313] text-[0.85rem] md:text-[0.96rem] font-semibold">
          Price: ${biddingPrice}
        </p>

        <div>
          <button
            onClick={() => handleStorePlayers(player)}
            className="text-[#131313] text-[0.72rem] md:text-[0.85rem] px-[0.85rem] md:px-[0.96rem] py-[0.45rem] md:py-[0.55rem] border border-[#1313131A] rounded-lg cursor-pointer"
            type="button"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleStorePlayers: PropTypes.func.isRequired,
};

export default Player;
