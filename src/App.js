import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameContainer from "./components/GameContainer";

function App() {
    return (
        <div className="App p-0 flex flex-col gap-0 h-full bg-gradient-to-t from-blue-200 via-blue-300 to-blue-400">
            <Header />
            <GameContainer />
            <Footer />
        </div>
    );
}

export default App;
