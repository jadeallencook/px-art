import React from 'react';
import './Board.css';
import pop from '../pop.wav';

export default function (props) {
  const { pxs, setPxs, colors, selected } = props;

  const fill = (index) => {
    const audio = new Audio(pop);
    audio.volume = 0.025;
    audio.play();
    const array = [...pxs];
    array[index] = selected;
    setPxs(array);
    window.location.hash = array.join('');
    audio.play();
  };

  return (
    <div className="Board">
      {pxs.map((px, index) => (
        <div
          key={`tile-${index}`}
          className="selectable block"
          style={{ backgroundColor: colors[px] }}
          onClick={() => fill(index)}
          onMouseEnter={(event) => {
            if (event.shiftKey) {
              fill(index);
            }
          }}
        ></div>
      ))}
    </div>
  );
}
