import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import './App.css';
import Transliteracia from './transliteracia';


function Traslit(){

var arrTranslit=[new Transliteracia('А','A'), new Transliteracia('Б', 'B'),
                new Transliteracia('В','V'), new Transliteracia('Г', 'G'),
                new Transliteracia('Д','D'), new Transliteracia('Е', 'E'),
                new Transliteracia('Ё','E'), new Transliteracia('Ж', 'ZH'),
                new Transliteracia('З','Z'), new Transliteracia('И', 'I'),
                new Transliteracia('Й','I'), new Transliteracia('К', 'K'),
                new Transliteracia('Л','L'), new Transliteracia('М', 'M'),
                new Transliteracia('Н','N'), new Transliteracia('О', 'O'),
                new Transliteracia('П','P'), new Transliteracia('Р', 'R'),
                new Transliteracia('С','S'), new Transliteracia('Т', 'T'),
                new Transliteracia('У','U'), new Transliteracia('Ф', 'F'),
                new Transliteracia('Х','KH'), new Transliteracia('Ц', 'TS'),
                new Transliteracia('Ч','CH'), new Transliteracia('Ш', 'SH'),
                new Transliteracia('Щ','SHCH'), new Transliteracia('Ы', 'Y'),
                new Transliteracia('Ь',''), new Transliteracia('Ъ', 'IE'),
                new Transliteracia('Э','E'), new Transliteracia('Ю', 'IU'),
                new Transliteracia('Я', 'IA')];

  const [rusState, setRusState] = useState("");
  const [translitState, setTranslitState] = useState("");  
  

  var text="";
  var letter="";
  var translitText="";
  var bukv="";
  const handlerChange = event => {
    const target = event.target;
     
    if((target.value).length>1)
    {
      letter=(target.value).toUpperCase();
      bukv=letter.slice(-1);
    }
    else
    {
      letter=(target.value).toUpperCase();
      bukv=letter;
    }

    text=target.value;
    setRusState(text); 

  translitText=document.getElementById("translit").value+arrTranslit.find(item=>item.letter===bukv).translit;
  setTranslitState(translitText);

}

  return (
    <>
    <div>
      <label>Russian text</label>
      <textarea type="text" name="rus" value={rusState} onChange={handlerChange}></textarea>
    </div>
    <div>
      <label>Translit</label>
      <textarea type="text" id="translit" value={translitState} ></textarea>
    </div>
    </>
  );
}

function App() {

  const [currDate, setDate] = useState(new Date());

  useEffect(() => {
    
    let handlerOfTimer = setInterval(() => timerAction(), 1000);

    function timerAction() {
      setDate(new Date());
    }

    return()=>{
      clearInterval(handlerOfTimer);
    }

  });

  return (
    <div className="App">
       <h1>{currDate.toLocaleTimeString()}</h1>
       <Traslit/>
    </div>
  );
}

export default App;
