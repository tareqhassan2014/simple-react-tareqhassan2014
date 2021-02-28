import './App.css';
import { useEffect, useState } from 'react';
import Cart from './component/Cart/Cart';
import MainPart from './component/MainPart/MainPart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/c1a86cbf')
      .then(response => response.json())
      .then(data => setPlayer(data))
  }, []);
  return (
    <div>
      <div className="container">
        <MainPart player={player}></MainPart>
      </div>
      <Cart></Cart>
    </div>
  );
}

export default App;
