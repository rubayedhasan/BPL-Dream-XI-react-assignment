import "./App.css";
import GroupButton from "./component/GroupButton/GroupButton.jsx";
import Header from "./component/Header/Header.jsx";

function App() {
  return (
    <>
      {/* header component: Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-full md:w-11/12 px-5 mx-auto mt-[5.28rem] md:px-0 ">
        {/* selecting buttons  */}
        <GroupButton></GroupButton>
      </main>
    </>
  );
}

export default App;
