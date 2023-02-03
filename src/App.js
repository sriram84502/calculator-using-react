import {useState} from "react";
function App() {
  const [answer,setAnswer] = useState(0);
  const [value,setValue] = useState("");
  const handleClick = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="container">
      <div className="calculator">
        <div className="displayCont">
          <div className="display">
            <p className="totalNumber" id="totalNumber">{value}</p>
            <h1 id="currentNumber" className="currentNumber">{answer}</h1>
            <p className="tempResult" id="tempResult">{value[value.length-1]}</p>
          </div>
        </div>
        <div className="numberCont">
          <div className="symbol clear" data-value="C" onClick={() => setValue(value.substring(0,value.length-1))} id="clear">C</div>
          <div className="symbol clearAll" data-value="CA" onClick={() => {setValue("");setAnswer(0)}} id="clearAll">CA</div>
          <div className="operator modulus" onClick={() => {setValue(value + "%");handleClick(setAnswer(eval(value)))}} data-value="%">%</div>
          <div className="operator divide" onClick={() => {setValue(value + "/");handleClick(setAnswer(eval(value)))}} data-value="/">&#247;</div>
          <div className="number number7" onClick={() => {setValue(value + "7");handleClick(setAnswer(eval(value)))}} data-value="7">7</div>
          <div className="number number8" onClick={() => {setValue(value + "8");handleClick(setAnswer(eval(value)))}} data-value="8">8</div>
          <div className="number number9" onClick={() => {setValue(value + "9");handleClick(setAnswer(eval(value)))}} data-value="9">9</div>
          <div className="operator multiply" onClick={() => {setValue(value + "*");handleClick(setAnswer(eval(value)))}} data-value="*">x</div>
          <div className="number number4" onClick={() => {setValue(value + "4");handleClick(setAnswer(eval(value)))}} data-value="4">4</div>
          <div className="number number5" onClick={() => {setValue(value + "5");handleClick(setAnswer(eval(value)))}} data-value="5">5</div>
          <div className="number number6" onClick={() => {setValue(value + "6");handleClick(setAnswer(eval(value)))}} data-value="6">6</div>
          <div className="operator minus" onClick={() => {setValue(value + "-");handleClick(setAnswer(eval(value)))}} data-value="-">-</div>
          <div className="number number1" onClick={() => {setValue(value + "1");handleClick(setAnswer(eval(value)))}} data-value="1">1</div>
          <div className="number number2" onClick={() => {setValue(value + "2");handleClick(setAnswer(eval(value)))}} data-value="2">2</div>
          <div className="number number3" onClick={() => {setValue(value + "3");handleClick(setAnswer(eval(value)))}} data-value="3">3</div>
          <div className="operator add" onClick={() => {setValue(value + "+");handleClick(setAnswer(eval(value)))}} data-value="+">+</div>
          <div className="number number0" onClick={() => {setValue(value + "0");handleClick(setAnswer(eval(value)))}} data-value="0">0</div>
          <div className="number dot" onClick={() => {setValue(value + ".");handleClick(setAnswer(eval(value)))}} data-value=".">.</div>
          <div className="symbol equalTo" onClick={() => {handleClick(setAnswer(eval(value)) ,setValue(""))}}  data-value="=" id="equalTo">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
