import './index.css';
import Gradient from './component/Gradient';
import down from "./imgs/172458_down_arrow_icon.svg";
import { useState } from 'react';

function App() {

  const [state, setState] = useState(false);

  return (
    <div className="App">

      <div className="gradientContainer">
        <Gradient color="linear-gradient(to right, #fa709a 0%, #fee140 100%)" delay="0.5s" state={state}/>
        <Gradient color="linear-gradient(to top, #5ee7df 0%, #b490ca 100%)" delay="1s" state={state}/>
        <Gradient color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" delay="1.5s" state={state}/>
        <Gradient color="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)" delay="2s" state={state}/>
        <Gradient color="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)" delay="2.5s" state={state}/>
        <Gradient color="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" delay="3s" state={state}/>
        <Gradient color="linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)" delay="3.5s" state={state}/>
      </div>

      <div className="click">
        <img src={down} alt="down arrow" className={state? "down" : "initial"} onClick={() => {setState(!state)}}/>
      </div>

    </div>
  );
}

export default App;
