import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import GetAccept from "./components/GetAccept";
import Addition from "./components/Addition";

const App = () => {
  return (
    <>
      <GetAccept />
      <Greeting schoolName="technigo" />
      <Counter />
      <Addition />
    </>
  );
};

export default App;
