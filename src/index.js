import React from 'react';
import ReactDOM from 'react-dom/client';
import { CubeSolver } from '3x3-cube';

const root = ReactDOM.createRoot(document.getElementById('react-cube-solver'));
root.render(
  <React.StrictMode>
    <CubeSolver />
  </React.StrictMode>
);
