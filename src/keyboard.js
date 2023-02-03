import React from 'react'

const Keyboard = (result,calculate,pre) => {
  return (
    <>
        <div class="numberCont">
          <div class="symbol clear" data-value="C" onClick={calculate({pre})} id="clear">C</div>
          <div class="symbol clearAll" data-value="CA" onClick={calculate({})} id="clearAll">CA</div>
          <div class="operator modulus" onClick={calculate({pre}+'%')} data-value="%">%</div>
          <div class="operator divide" onClick={calculate({pre}+'/')} data-value="/">&#247;</div>
          <div class="number number7" onClick={calculate({pre}+'7')} data-value="7">7</div>
          <div class="number number8" onClick={calculate({pre}+'8')} data-value="8">8</div>
          <div class="number number9" onClick={calculate({pre}+'9')} data-value="9">9</div>
          <div class="operator multiply" onClick={calculate({pre}+'*')} data-value="*">x</div>
          <div class="number number4" onClick={calculate({pre}+'4')} data-value="4">4</div>
          <div class="number number5" onClick={calculate({pre}+'5')} data-value="5">5</div>
          <div class="number number6" onClick={calculate({pre}+'6')} data-value="6">6</div>
          <div class="operator minus" onClick={calculate({pre}+'-')} data-value="-">-</div>
          <div class="number number1" onClick={calculate({pre}+'1')} data-value="1">1</div>
          <div class="number number2" onClick={calculate({pre}+'2')} data-value="2">2</div>
          <div class="number number3" onClick={calculate({pre}+'3')} data-value="3">3</div>
          <div class="operator add" onClick={calculate({pre}+'+')} data-value="+">+</div>
          <div class="number number0" onClick={calculate({pre}+'0')} data-value="0">0</div>
          <div class="number dot" onClick={calculate({pre}+'.')} data-value=".">.</div>
          <div class="symbol equalTo" data-value="=" onClick={result} id="equalTo">=</div>
        </div>
    </>
  )
}

export default Keyboard