import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBtn from "./components/btn";


function App() {
    const [state, setState] = useState({text : 'Before-Click'});
    const clickHandler =() => {
        setState( {text : 'After-Click' });
    }

  return (
   <>
       {
           <AppBtn state={state} clickHandler={clickHandler}/>
       }
   </>
  );
}

export default App;
