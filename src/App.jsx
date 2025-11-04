import "./App.css";
import Header from "./component/Header/Header.jsx";

function App() {
  return (
    <>
      {/* header component: Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-full md:w-11/12 px-5 mx-auto bg-green-200 mt-[5.28rem] md:px-0 ">
        <p>main section</p>
      </main>
    </>
  );
}

export default App;
