import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const answer = {
  displayValue: '',
  };

  function updateDisplay(digit) {
    const display = document.querySelector('.answer_input');

    if (digit = '') {
      display.value = "";
    } else {
      display.value += 7;
      //didnt get this to work properly yet.
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <div class="numpad">

            <input type="text" class="answer_input" value="" disabled />

            <div class="number_buttons">

              <button onClick={() => updateDisplay(7)} type="button" value="7" class="decimal">7</button>
              <button type="button" value="8" class="decimal">8</button>
              <button type="button" value="9" class="decimal">9</button>

              <button type="button" value="4" class="decimal">4</button>
              <button type="button" value="5" class="decimal">5</button>
              <button type="button" value="6" class="decimal">6</button>

              <button type="button" value="1" class="decimal">1</button>
              <button type="button" value="2" class="decimal">2</button>
              <button type="button" value="3" class="decimal">3</button>

              <button type="button" value="backspace" class="back">back</button>
              <button type="button" value="0" class="decimal">0</button>
              <button type="button" value="enter" class="done">Done</button>


            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
