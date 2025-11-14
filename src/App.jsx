import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header.jsx";
import PlayersContainer from "./component/PlayersContainer/PlayersContainer.jsx";
import FooterContainer from "./component/FooterContainer/FooterContainer.jsx";

function App() {
  // state: toggle the join buttons
  const [btnToggle, setBtnToggle] = useState({
    toggle: true, // default true to show available section
    stage: "available",
  });

  // state: get available coin
  const [availableCoin, setAvailableCoin] = useState(0);

  // state: get remaining available coin
  const [playerFee, setPlayerFee] = useState(0);

  // function: handle buttons toggle functionality
  const handleToggle = (stage) => {
    if (stage.toLowerCase() === "available") {
      setBtnToggle({
        toggle: true,
        stage: "available",
      });

      return;
    }
    setBtnToggle({
      toggle: false,
      stage: "selected",
    });
  };

  // function: handle the available coin
  const handleAvailableCoin = (coin) => {
    setAvailableCoin(coin);
  };

  // function: get the remaining available coin
  const handlePlayerFee = (fee) => {
    setPlayerFee(fee);
  };

  return (
    <>
      {/* header component: Header  */}
      <Header
        handleAvailableCoin={handleAvailableCoin}
        playerFee={playerFee}
      ></Header>

      {/* main section  */}
      <main className="w-full md:w-11/12 px-5 mx-auto mt-[4.85rem] md:mt-[5.28rem] md:px-0 ">
        <PlayersContainer
          handleToggle={handleToggle}
          btnToggle={btnToggle}
          availableCoin={availableCoin}
          handlePlayerFee={handlePlayerFee}
        ></PlayersContainer>
      </main>

      {/* footer container section component: FooterContainer  */}
      <FooterContainer></FooterContainer>
    </>
  );
}

export default App;
