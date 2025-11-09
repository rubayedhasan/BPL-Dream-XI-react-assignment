import ShadowPicture from "../../assets/images/bg-shadow.png";
import BtnBgShadow from "../../assets/images/bg-btn.png";

const Newsletter = () => {
  return (
    <div className="bg-[#ffffff26] border-2 border-white p-[0.96rem] md:p-[1.44rem] rounded-[1.44rem] absolute -top-40 left-0 w-full">
      <div
        className="flex justify-center items-center bg-white bg-no-repeat bg-cover rounded-[1.44rem] py-[2.28rem] md:py-[3.28rem] lg:py-[5.28rem] w-full"
        style={{ backgroundImage: `url(${ShadowPicture})` }}
      >
        <div className="flex flex-col items-center justify-center gap-[0.76rem] lg:gap-[0.96rem] text-center">
          <h4 className="font-bold text-[1.5rem] lg:text-[1.92rem]">
            Subscribe to our Newsletter
          </h4>
          <p className="font-medium text-[1rem] lg:text-[1.2rem] text-[#131313B3]">
            Get the latest updates and news right in your inbox!
          </p>

          {/* user email */}
          <form className="flex flex-col md:flex-row items-center gap-[0.96rem] w-full mt-[1.44rem]">
            <div className="flex-1">
              <input
                type="email"
                name=""
                id=""
                className="input text-[0.96rem] text-[#131313B3] bg-white border border-[#13131326] py-[1.35rem] px-[1.8rem] rounded-[0.72rem] w-full block"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <button
                className="font-bold text-[0.96rem] text-[#131313] py-[0.76rem] px-[1.8rem] rounded-[0.72rem] bg-center bg-no-repeat bg-cover cursor-pointer inset-shadow-sm inset-shadow-[#1313134D]"
                style={{ backgroundImage: `url(${BtnBgShadow})` }}
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
