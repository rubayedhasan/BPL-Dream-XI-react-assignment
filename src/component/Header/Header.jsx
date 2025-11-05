import { useState } from "react";
import Banner from "../Banner/Banner.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const Header = () => {
  // state: to add free credit
  const [credit, setCredit] = useState(0);

  // function:: to add the credit
  const handleAddCredit = () => {
    const creditAmount = 6000000;
    const newCredit = credit + creditAmount;
    setCredit(newCredit);
  };

  return (
    <div className="w-full md:w-11/12 mx-auto mt-12 px-5 md:px-0 lg:h-[calc(100%-14.04rem)]">
      {/* navbar component: Navbar  */}
      <Navbar credit={credit}></Navbar>

      {/* banner component: Banner  */}
      <Banner handleAddCredit={handleAddCredit}></Banner>
    </div>
  );
};

export default Header;
