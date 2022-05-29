import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <div className="App p-0 flex flex-col gap-0 h-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <Header />
        <GameContainer />
        <Footer />
    </div>
  );
}

export default App;
