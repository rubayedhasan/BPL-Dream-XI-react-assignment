import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { toast } from "react-toastify";

const Header = ({ handleAvailableCoin, updatedCoin }) => {
  // state: to store free credit.
  const [credit, setCredit] = useState(0);

  // effect: handle the effect on updating the credit
  useEffect(() => {
    // validation effect
    if (!updatedCoin) {
      return;
    }

    // update the available coin or credit after add or remove player
    setCredit(updatedCoin);
  }, [updatedCoin]);

  // function:: to add the credit on credit container (navbar)
  const handleAddCredit = () => {
    const creditAmount = 6000000;
    const newCredit = credit + creditAmount;
    setCredit(newCredit);

    // show toast
    toast.success("Successfully..! Credit Transfer on your account.", {
      position: "top-center",
    });
  };

  // share the available credit to other component (App, PlayersContainer)
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
  handleAvailableCoin: PropTypes.func.isRequired,
  updatedCoin: PropTypes.number.isRequired,
};

export default Header;
