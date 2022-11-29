import React from 'react';
import ReactDOM from 'react-dom/client';
import { CubeSolver, getFacelets } from '3x3-cube';

const root = ReactDOM.createRoot(document.getElementById('react-cube-solver'));
root.render(
  <React.StrictMode>
    <CubeSolver
      solve={
        async () => await
          fetch(`api/solveCube?facelets=${getFacelets()}`)
            .then(res => res.json())
            .then(data => data.join(' ')
          )
      } />
  </React.StrictMode>
);
