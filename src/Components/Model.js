import React from 'react';

import { Howl } from 'howler';

import '../Styles/Model.css';

function Model(props) {
  let win = new Howl({
    src: ['/winning.mp3'],
  });

  return (
    <div className="model-body" onLoad={win.play()}>
      <div
        className="model-text animate__animated animate__backInDown"
        style={
          props.winner
            ? { backgroundColor: 'var(--Danger-color) ' }
            : { backgroundColor: 'var(--Sucess-color)' }
        }
      >
        <div>{`Winner is`}</div>
        <span>
          {props.winner === 'x' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="100"
              height="100"
            >
              <path
                fill=" #F9C74F"
                d="M384.955 256l120.28-120.28c9.019-9.019 9.019-23.642 0-32.66L408.94 6.765c-9.019-9.019-23.642-9.019-32.66 0L256 127.045 135.718 6.765c-9.019-9.019-23.642-9.019-32.66 0L6.764 103.058c-9.019 9.019-9.019 23.642 0 32.66l120.28 120.28L6.764 376.28c-9.019 9.019-9.019 23.642 0 32.66l96.295 96.294c9.019 9.019 23.642 9.019 32.66 0l120.28-120.28 120.28 120.28c9.019 9.019 23.642 9.019 32.66 0l96.295-96.294c9.019-9.019 9.019-23.642 0-32.66L384.955 256z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 512 512"
            >
              <path
                fill="#F9C74F"
                d="M142.519 255.678c0-93.223 40.415-144.565 113.804-144.565 72.759 0 112.837 50.889 112.837 143.306 0 93.091-41.133 146.47-112.837 146.47-71.265-.001-113.804-54.288-113.804-145.211zM494.33 220.75C481.25 84.44 392.46.26 256 0h-.63C105.49 0 16 97.4 16 258.86c0 155.3 91.94 252.87 240 253.14h.63C404.27 512 496 413.53 496 256.63c0-12.3-.56-24.27-1.67-35.88z"
              />
              <path
                fill="#f9c64f8c"
                d="M496 256.63C496 413.53 404.27 512 256.63 512H256V400.86c.11 0 .21.03.32.03 71.71 0 112.84-53.38 112.84-146.47 0-92.42-40.08-143.31-112.84-143.31-.11 0-.21.03-.32.03V0c136.46.26 225.25 84.44 238.33 220.75 1.11 11.61 1.67 23.58 1.67 35.88z"
              />
            </svg>
          )}
        </span>
      </div>
      <div className="model-icon" style={{ color: 'black' }} onClick={Close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            fill="hsl(209, 83%, 47%)"
            d="M59.08 0L0 59.08 196.92 256 0 452.92 59.08 512 256 315.08 283.85 256 256 196.92z"
          />
          <path
            fill="hsl(209, 83%, 47%)"
            d="M512 59.08L452.92 0 256 196.92v118.16L452.92 512 512 452.92 315.08 256z"
          />
        </svg>
      </div>
    </div>
  );

  function Close() {
    window.location.reload();
  }
}

export default Model;
