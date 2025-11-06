import PropTypes from "prop-types";
import BannerImage from "../../assets/images/banner-main.png";
import ShadowPicture from "../../assets/images/bg-shadow.png";

const Banner = ({ handleAddCredit }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[1.3rem] lg:gap-[1.44rem] mt-[1.44rem] p-[2.3rem] md:p-[3.84rem] bg-[#131313] bg-no-repeat bg-cover bg-blend-lighten border border-[#1313131A] rounded-[1.44rem] lg:h-[calc(100%-7.45rem)]"
      style={{ backgroundImage: `url(${ShadowPicture})` }}
    >
      {/* banner image  */}
      <figure className="lg:w-[14.88rem] lg:h-48 flex justify-center items-center">
        <img
          src={BannerImage}
          alt="banner image"
          className="w-full object-contain"
        />
      </figure>

      {/* banner contents  */}
      <div className="text-center space-y-[0.96rem]">
        {/* banner title */}
        <h1 className="font-bold text-white text-[1.5rem] md:text-[2rem] lg:text-[2.4rem]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* banner text  */}
        <p className="font-inter font-medium text-white text-[1rem] md:text-[1.22rem] lg:text-[1.44rem]">
          Beyond Boundaries Beyond Limits
        </p>
      </div>

      {/* claim credit button  */}
      <div className="p-2 border border-[#E7FE29] rounded-xl cursor-pointer">
        <button
          onClick={handleAddCredit}
          className="font-bold text-[#131313] text-[0.85rem] lg:text-[0.96rem] bg-[#E7FE29] border border-[#E7FE29] rounded-xl py-3 lg:py-3.5 px-4 lg:px-5 cursor-pointer"
          type="button"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

// define the prop types
Banner.propTypes = {
  handleAddCredit: PropTypes.func.isRequired,
};

export default Banner;
