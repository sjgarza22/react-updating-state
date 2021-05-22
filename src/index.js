import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './components/ButtonCounter.js';
import ClickityClick from './components/ClickityClick.js'
import LightSwitch from './components/LightSwitch.js';

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
