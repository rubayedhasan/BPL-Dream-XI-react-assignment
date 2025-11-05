import BannerImage from "../../assets/images/banner-main.png";
import ShadowPicture from "../../assets/images/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[1.44rem] mt-[1.44rem] py-[3.84rem] bg-[#131313] bg-no-repeat bg-cover bg-blend-lighten border border-[#1313131A] rounded-[1.44rem] h-[calc(100%-10.44rem)]"
      style={{ backgroundImage: `url(${ShadowPicture})` }}
    >
      {/* banner image  */}
      <figure>
        <img src={BannerImage} alt="banner image" />
      </figure>

      {/* banner contents  */}
      <div className="text-center space-y-[0.96rem]">
        {/* banner title */}
        <h1 className="font-bold text-white text-[2.4rem]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* banner text  */}
        <p className="font-inter font-medium text-white text-[1.44rem]">
          Beyond Boundaries Beyond Limits
        </p>
      </div>

      {/* claim credit button  */}
      <div className="p-2 border border-[#E7FE29] rounded-xl cursor-pointer">
        <button
          className="font-bold text-[#131313] text-[0.96rem] bg-[#E7FE29] border border-[#E7FE29] rounded-xl py-3.5 px-5 cursor-pointer"
          type="button"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
