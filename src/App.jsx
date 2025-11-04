import "./App.css";
import Header from "./component/Header/Header.jsx";

function App() {
  return (
    <>
      {/* header component: Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-11/12 mx-auto bg-green-200">
        <p>main section</p>
      </main>
    </>
  );
}

export default App;
