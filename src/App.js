import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import GetAccept from "./components/GetAccept";

const App = () => {
  return (
    <>
      <GetAccept />
      <Greeting schoolName="technigo" />
      <Counter />
    </>
  );
};

export default App;
