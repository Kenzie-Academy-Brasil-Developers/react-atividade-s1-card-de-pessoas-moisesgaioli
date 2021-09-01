import logo from './logo.svg';
import './App.css';

import Developer from "./components/Developer"

function App() {

  const devOne = {
    name: "Moisés",
    age: 28,
    country: "Brasil",
  }

  const devTwo = {
    name: "João",
    age: 23,
    country: "Brasil",
  }

  const devThree = {
    name: "Elizabeth",
    age: 31,
    country: "Inglaterra",
  }

  const devFour = {
    name: "Soarez",
    age: 27,
    country: "Argentina",
  }

  const devFive = {
    name: "Cristiano",
    age: 35,
    country: "Portugal",
  }

  return (
    <div className="App">
      <Developer name={devOne.name} age={devOne.age} country={devOne.country} />
      <Developer name={devTwo.name} age={devTwo.age} country={devTwo.country} />
      <Developer name={devThree.name} age={devThree.age} country={devThree.country} />
      <Developer name={devFour.name} age={devFour.age} country={devFour.country} />
      <Developer name={devFive.name} age={devFive.age} country={devFive.country} />
    </div>
  );
}

export default App;
