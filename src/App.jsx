import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header.jsx";
import PlayersContainer from "./component/PlayersContainer/PlayersContainer.jsx";

function App() {
  // state: toggle the join buttons
  const [btnToggle, setBtnToggle] = useState({
    toggle: true,
    stage: "available",
  });

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

  return (
    <>
      {/* header component: Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-full md:w-11/12 px-5 mx-auto mt-[4.85rem] md:mt-[5.28rem] md:px-0 ">
        <PlayersContainer
          handleToggle={handleToggle}
          btnToggle={btnToggle}
        ></PlayersContainer>
      </main>
    </>
  );
}

export default App;
