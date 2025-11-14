import PropTypes from "prop-types";
import Players from "../Players/Players";
import PlayersCart from "../PlayersCart/PlayersCart";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayersContainer = ({
  handleToggle,
  btnToggle,
  availableCoin,
  handleUpdatedCoin,
}) => {
  const { toggle } = btnToggle;

  // state: get the players for player on clicking choose button
  const [carts, setCarts] = useState([]);

  // function: handle the store players on the carts
  const handleStorePlayers = (id, singlePlayer) => {
    // validation: if there is not enough credit it will give alert
    if (!availableCoin) {
      toast.error(
        "Error: You do not have enough credit to complete this purchase. Please add funds and try again.",
        {
          position: "top-center",
        }
      );
      return;
    }

    // validation: no duplication of players
    const containPlayer = carts.find((p) => p?.playerId === id);
    if (containPlayer) {
      toast.warn(
        "This player is already listed. Please select a different player"
      );
      return;
    }

    // validation: available coin (credit) must more than player biddingPrice (player fee)
    if (singlePlayer?.biddingPrice > availableCoin) {
      toast.error("You lack the necessary credit to add this player.", {
        position: "top-center",
      });
      return;
    }

    // validation: don't add more than 6 players
    if (carts.length > 5) {
      toast.warn("You've reached the team limit. Maximum 6 players allowed.");
      return;
    }

    // store the selected player
    const newCarts = [...carts, singlePlayer];
    setCarts(newCarts);

    // show successfully alert
    toast.success("Congratulations! The player has been added successfully.");

    // decrease the available coin or credit after add the player to the cart
    handleUpdatedCoin(availableCoin - singlePlayer?.biddingPrice);
  };

  // function: remove the player from the cart list
  const handleRemovePlayer = (removedPlayer) => {
    // remove the player
    const remainingPlayers = carts.filter(
      (p) => p?.playerId !== removedPlayer?.playerId
    );
    setCarts(remainingPlayers);

    // show toast
    toast.success(`${removedPlayer?.name} is remove from your team`, {
      position: "top-left",
      theme: "light",
    });

    // pass the removed players fee to increase the available coin or credit
    handleUpdatedCoin(availableCoin + removedPlayer?.biddingPrice);
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
          <PlayersCart
            carts={carts}
            handleToggle={handleToggle}
            handleRemovePlayer={handleRemovePlayer}
          ></PlayersCart>
        )}
      </div>
    </>
  );
};

PlayersContainer.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  btnToggle: PropTypes.object.isRequired,
  availableCoin: PropTypes.number.isRequired,
  handleUpdatedCoin: PropTypes.func.isRequired,
};

export default PlayersContainer;
