import PropTypes from "prop-types";
import Players from "../Players/Players";
import PlayersCart from "../PlayersCart/PlayersCart";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayersContainer = ({ handleToggle, btnToggle, availableCoin }) => {
  const { toggle } = btnToggle;

  // state: get the players for player on clicking choose button
  const [carts, setCarts] = useState([]);

  // function: handle the store players on the carts
  const handleStorePlayers = (singlePlayer) => {
    // validation: if there is not enough credit it will give alert
    if (!availableCoin) {
      toast.error(
        "Error: You do not have enough credit to complete this purchase. Please add funds and try again.",
        {
          theme: "colored",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        }
      );
      return;
    }

    // store the selected player
    const newCarts = [...carts, singlePlayer];
    setCarts(newCarts);
  };

  return (
    <>
      {/* buttons  container  */}
      <div className="flex flex-col-reverse md:flex-row gap-7 justify-between items-center">
        {/* Active Button indicator  */}
        <div>
          <h3 className="font-bold text-[#131313] text-[1.35rem] md:text-[1.58rem] lg:text-[1.68rem]">
            {toggle ? (
              <span>Available Players</span>
            ) : (
              <span> Selected Players ({carts.length}/6)</span>
            )}
          </h3>
        </div>

        {/* join Buttons  */}
        <div className="join">
          {/* available button  */}
          <button
            onClick={() => handleToggle("available")}
            className="px-[1.45rem] md:px-[1.8rem] py-[0.76rem] md:py-[0.9rem] border border-[#1313131A] rounded-l-xl join-item text-[0.9rem] md:text-[0.96rem]  cursor-pointer"
            style={{
              color: toggle ? "#131313" : "#1313139C",
              fontWeight: toggle ? "700" : "400",
              backgroundColor: toggle ? "#E7FE29" : "#ffffff",
            }}
          >
            Available
          </button>

          {/* Select button  */}
          <button
            onClick={() => handleToggle("selected")}
            className="px-[1.45rem] md:px-[1.8rem] py-[0.76rem] md:py-[0.9rem] border border-[#1313131A] rounded-r-xl join-item text-[0.9rem] md:text-[0.96rem] cursor-pointer"
            style={{
              color: toggle ? "#1313139C" : "#131313",
              fontWeight: toggle ? "400" : "700",
              backgroundColor: toggle ? "#ffffff" : "#E7FE29",
            }}
          >
            Selected ({carts.length})
          </button>
        </div>
      </div>

      {/* Players or PlayersCart Component base on Condition  */}
      <div className="mt-[1.92rem]">
        {btnToggle.toggle ? (
          <Players handleStorePlayers={handleStorePlayers}></Players>
        ) : (
          <PlayersCart carts={carts}></PlayersCart>
        )}
      </div>
    </>
  );
};

PlayersContainer.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  btnToggle: PropTypes.object.isRequired,
  availableCoin: PropTypes.number.isRequired,
};

export default PlayersContainer;
