import Logo from "../../assets/images/logo.png";
import Coin from "../../assets/images/currency.png";

const Navbar = () => {
  return (
    <>
      {/* show logo on the top only for small devices  */}
      <div className="flex md:hidden justify-center items-center mb-3.5">
        <figure className="w-14 h-14 flex justify-center items-center">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </figure>
      </div>

      {/* navbar section  */}
      <nav className="navbar items-center">
        <div className="navbar-start flex-1">
          {/* dropdown for small devices  */}
          <div className="dropdown">
            {/* ham-burger icon */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* drop down menu  */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="" className="text-[0.83rem] text-[#131313B3]">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-[0.83rem] text-[#131313B3]">
                  Fixture
                </a>
              </li>
              <li>
                <a href="" className="text-[0.83rem] text-[#131313B3]">
                  Teams
                </a>
              </li>
              <li>
                <a href="" className="text-[0.83rem] text-[#131313B3]">
                  Schedules
                </a>
              </li>
            </ul>
          </div>

          {/* logo  */}
          <a className="hidden md:flex mx-auto lg:mx-0">
            <img
              src={Logo}
              alt="logo"
              className="w-12 h-12 lg:w-[4.32rem] lg:h-[4.32rem] object-contain"
            />
          </a>
        </div>

        {/* menu show only for large devices */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-[1.44rem] xl:gap-[2.88rem]">
            <li>
              <a href="" className="text-[0.96rem] text-[#131313B3]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-[0.96rem] text-[#131313B3]">
                Fixture
              </a>
            </li>
            <li>
              <a href="" className="text-[0.96rem] text-[#131313B3]">
                Teams
              </a>
            </li>
            <li>
              <a href="" className="text-[0.96rem] text-[#131313B3]">
                Schedules
              </a>
            </li>
          </ul>
        </div>

        {/* show currency  */}
        <div className="ml-0 lg:ml-[1.44rem] xl:ml-[2.88rem] max-w-40">
          <div className="flex justify-center items-center gap-[0.6rem] md:border md:border-[#1313131A] md:px-[1.2rem] md:py-[0.96rem] md:rounded-[0.72rem]">
            <p className="font-semibold text-[#131313] text-[0.83rem] md:text-[0.96rem]">
              0 Coin
            </p>
            <img src={Coin} alt="currency" className="object-scale-down" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
