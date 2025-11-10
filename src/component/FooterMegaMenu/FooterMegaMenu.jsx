import FooterLogo from "../../assets/images/logo-footer.png";
import BtnBgShadow from "../../assets/images/bg-btn.png";

const FooterMegaMenu = () => {
  return (
    <div className="pt-[18.4rem] text-white">
      {/* footer logo  */}
      <div className="flex justify-center">
        <figure className="flex justify-center w-[8.52rem] h-[8.4rem]">
          <img
            src={FooterLogo}
            alt=""
            className="w-full h-full object-contain"
          />
        </figure>
      </div>

      {/* footer mega menu  */}
      <div className="footer sm:footer-horizontal mt-[3.84rem]">
        {/* about us block  */}
        <div>
          <h5 className="font-semibold text-[1.1rem] text-white">About Us</h5>
          <p className="text-[0.96rem] text-[#ffffff99] mt-[0.96rem]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* quick links block  */}
        <nav>
          <h6 className="font-semibold text-[1.1rem] text-white">
            Quick Links
          </h6>
          <ul
            className="list-disc list-inside text-[0.96rem] text-[#ffffff99] space-y-2.5 mt-[0.96rem]
"
          >
            <li>
              <a className="link link-hover">Home</a>
            </li>
            <li>
              <a className="link link-hover">Services</a>
            </li>
            <li>
              <a className="link link-hover">About</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>
        </nav>

        {/* subscribe block */}
        <form>
          <h6 className="font-semibold text-[1.1rem] text-white">Subscribe</h6>
          <p className="text-[0.96rem] text-[#ffffff99] mt-[0.96rem]">
            Subscribe to our newsletter for the latest updates.
          </p>

          {/* form field  */}
          <div className="flex flex-col md:flex-row items-center gap-[0.96rem] w-full mt-[1.44rem]">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterMegaMenu;
