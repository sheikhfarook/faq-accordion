import "./App.css";
import BackGround from "./components/background";
import Fags from "./components/fags";
import { TailwindIndicator } from "./components/indicator/tailwindindicator";

function App() {
  return (
    <div>
      <BackGround />
      <Fags />
      <TailwindIndicator />
    </div>
  );
}

export default App;
