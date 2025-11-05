import Banner from "../Banner/Banner.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const Header = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto mt-12 px-5 md:px-0 h-screen">
      {/* navbar component: Navbar  */}
      <Navbar></Navbar>

      {/* banner component: Banner  */}
      <Banner></Banner>
    </div>
  );
};

export default Header;
