import PropTypes from "prop-types";
import Players from "../Players/Players";
import PlayersCart from "../PlayersCart/PlayersCart";

const PlayersContainer = ({ handleToggle, btnToggle }) => {
  const { toggle } = btnToggle;

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Active Button indicator  */}
        <div>
          <h3 className="font-bold text-[#131313] text-[1.68rem]">
            {toggle ? (
              <span>Available Players</span>
            ) : (
              <span> Selected Players (0/6)</span>
            )}
          </h3>
        </div>

        {/* join Buttons  */}
        <div className="join">
          {/* available button  */}
          <button
            onClick={() => handleToggle("available")}
            className="px-[1.8rem] py-[0.9rem] border border-[#1313131A] rounded-l-xl join-item text-[0.96rem]  cursor-pointer"
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
            className="px-[1.8rem] py-[0.9rem] border border-[#1313131A] rounded-r-xl join-item text-[0.96rem] cursor-pointer"
            style={{
              color: toggle ? "#1313139C" : "#131313",
              fontWeight: toggle ? "400" : "700",
              backgroundColor: toggle ? "#ffffff" : "#E7FE29",
            }}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {/* Players or PlayersCart Component base on Condition  */}
      <div className="mt-[1.92rem]">
        {btnToggle.toggle ? <Players></Players> : <PlayersCart></PlayersCart>}
      </div>
    </>
  );
};

PlayersContainer.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  btnToggle: PropTypes.object.isRequired,
};

export default PlayersContainer;
