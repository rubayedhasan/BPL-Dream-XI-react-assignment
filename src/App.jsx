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

  // state: store your available coin or credit amount
  const [availableCoin, setAvailableCoin] = useState(0);

  // state: store the updated coin or credit amount
  const [updatedCoin, setUpdatedCion] = useState(0);

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

  // function: handle the available coin (to getting the credit from Header component)
  const handleAvailableCoin = (coin) => {
    setAvailableCoin(coin);
  };

  // function: handle update coin or credit after add or remove player to the cart (from PlayersContainer)
  const handleUpdatedCoin = (coin) => {
    setUpdatedCion(coin);
  };

  return (
    <>
      {/* header component: Header  */}
      <Header
        handleAvailableCoin={handleAvailableCoin}
        updatedCoin={updatedCoin}
      ></Header>

      {/* main section  */}
      <main className="w-full md:w-11/12 px-5 mx-auto mt-[4.85rem] md:mt-[5.28rem] md:px-0 ">
        {/* players cards section component: PlayersContainer */}
        <PlayersContainer
          handleToggle={handleToggle}
          btnToggle={btnToggle}
          availableCoin={availableCoin}
          handleUpdatedCoin={handleUpdatedCoin}
        ></PlayersContainer>
      </main>

      {/* footer container section component: FooterContainer  */}
      <FooterContainer></FooterContainer>
    </>
  );
}

export default App;
