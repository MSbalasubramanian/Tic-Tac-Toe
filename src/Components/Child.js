import React, { useState } from 'react';

import { Howl } from 'howler';

import Model from './Model';

import '../Styles/Child.css';

let Press = new Howl({
  src: ['/click.mp3'],
});

const Child = () => {
  let [currentTerm, setCurrentTerm] = useState('x');
  let [colorChg, setColorChg] = useState('');
  let [clicked, setClicked] = useState(false);
  let [winner, setWinner] = useState();

  return (
    <>
      {/* <h1>{winner ? `Winner : ${winner}` : ''}</h1> */}
      <div className={`Board-grid  ${currentTerm} `}>
        <div
          className={`child child-1`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-2`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-3`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-4 `}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-5  `}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-6`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-7`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-8`}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
        <div
          className={`child child-9 `}
          style={{ borderColor: colorChg }}
          onClick={OneClick}
        ></div>
      </div>

      {winner ? <Model winner={winner} /> : null}
    </>
  );

  function OneClick(e) {
    if (!clicked) {
      Place(e);
      setClicked(clicked);
      WinningMessage();
      Press.play();
    }
  }

  function Place(e) {
    e.target.classList.add(currentTerm);
    let value = currentTerm === 'x' ? 'c' : 'x';
    setCurrentTerm(value);
    ColorChange();
  }

  function ColorChange() {
    let arr_key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let colorSet = [
      arr_key[Math.floor(Math.random() * arr_key.length)],
      arr_key[Math.floor(Math.random() * arr_key.length)],
      arr_key[Math.floor(Math.random() * arr_key.length)],
      arr_key[Math.floor(Math.random() * arr_key.length)],
      arr_key[Math.floor(Math.random() * arr_key.length)],
      arr_key[Math.floor(Math.random() * arr_key.length)],
    ];
    let color = `#${colorSet.join('')}`;

    setColorChg(color);
  }

  function WinningMessage(e) {
    let child1 = document.querySelector('.child-1').classList[
      document.querySelector('.child-1').classList.length - 1
    ];
    let child2 = document.querySelector('.child-2').classList[
      document.querySelector('.child-2').classList.length - 1
    ];
    let child3 = document.querySelector('.child-3').classList[
      document.querySelector('.child-3').classList.length - 1
    ];
    let child4 = document.querySelector('.child-4').classList[
      document.querySelector('.child-4').classList.length - 1
    ];
    let child5 = document.querySelector('.child-5').classList[
      document.querySelector('.child-5').classList.length - 1
    ];
    let child6 = document.querySelector('.child-6').classList[
      document.querySelector('.child-6').classList.length - 1
    ];
    let child7 = document.querySelector('.child-7').classList[
      document.querySelector('.child-7').classList.length - 1
    ];
    let child8 = document.querySelector('.child-8').classList[
      document.querySelector('.child-8').classList.length - 1
    ];
    let child9 = document.querySelector('.child-9').classList[
      document.querySelector('.child-9').classList.length - 1
    ];

    if (child1 === child2 && child2 === child3) {
      child1 && child2 && child3 === 'x' ? setWinner('x') : setWinner('y');
    } else if (child4 === child5 && child5 === child6) {
      child4 && child5 && child6 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child7 === child8 && child8 === child9) {
      child7 && child8 && child9 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child1 === child4 && child4 === child7) {
      child1 && child4 && child7 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child2 === child5 && child5 === child8) {
      child2 && child5 && child8 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child3 === child6 && child6 === child9) {
      child3 && child6 && child9 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child1 === child5 && child5 === child9) {
      child1 && child5 && child9 === 'x' ? setWinner('x') : setWinner('c');
    } else if (child3 === child5 && child5 === child7) {
      child3 && child5 && child7 === 'x' ? setWinner('x') : setWinner('c');
    }
  }

  // this must be done when model is closed for now it is here
  // function Reload() {
  //   if (winner === 'x' || winner === 'c') {
  //     window.location.reload(true);
  //   }
  // }
};
export default Child;

// strike logic
// select the direction based on the child
// ex :  cell 1  ===  cell 5
