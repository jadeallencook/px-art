import { useState } from 'react';

export default function (x, y, hash) {
  const [pxs, setPxs] = useState(hash && hash.length === 256 ? hash.split('') : Array(x * y).fill(0));
  const [colors, setColors] = useState([
    '#FFFFFF',
    '#000000',
    '#DF0101',
    '#B45F04',
    '#AEB404',
    '#04B404',
    '#0431B4',
    '#8904B1',
  ]);
  const [selected, setSelected] = useState(0);
  return { pxs, setPxs, colors, setColors, selected, setSelected};
}
