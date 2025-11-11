import PropTypes from "prop-types";
import { useState } from "react";
import Banner from "../Banner/Banner.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { toast } from "react-toastify";

const Header = ({ handleAvailableCoin }) => {
  // state: to add free credit
  const [credit, setCredit] = useState(0);

  // function:: to add the credit
  const handleAddCredit = () => {
    const creditAmount = 6000000;
    const newCredit = credit + creditAmount;
    setCredit(newCredit);

    // show toast
    toast.success("Successfully..! Credit Transfer on your account.", {
      position: "top-center",
      autoClose: "3000",
      pauseOnHover: false,
      draggable: true,
      closeOnClick: true,
    });
  };

  // get the coin
  handleAvailableCoin(credit);

  return (
    <div className="w-full md:w-11/12 mx-auto mt-12 px-5 md:px-0 lg:h-[calc(100%-3rem)]">
      {/* navbar component: Navbar  */}
      <Navbar credit={credit}></Navbar>

      {/* banner component: Banner  */}
      <Banner handleAddCredit={handleAddCredit}></Banner>
    </div>
  );
};

Header.propTypes = {
  handleAvailableCoin: PropTypes.func,
};
export default Header;
