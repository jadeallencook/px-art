import React from 'react';
import click from '../click.wav';
import './Colors.css';

export default function (props) {
  const { colors, selected, setSelected } = props;
  return (
    <div className="Colors">
      {colors.map((color, index) => (
        <div
          key={`color-${index}`}
          className={`selectable block ${index === selected && 'selected'}`}
          onClick={() => {
            const audio = new Audio(click);
            audio.volume = 0.025;
            audio.play();
            setSelected(index);
          }}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}
