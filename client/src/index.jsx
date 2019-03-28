//an idea: pages can technically be rendered via state. state would start at 0, then increment.
//multiples of 7 would then render on the page.
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

render(<App />, document.getElementById('app'))