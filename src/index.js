import React from 'react'
import ReactDOM from 'react-dom/client'
import { Timeclock } from 'react-timeclock'
import { CubeSolver, getFacelets } from '3x3-cube'

const timesheetRoot = ReactDOM.createRoot(document.getElementById('react-timeclock'));
timesheetRoot.render(
  <React.StrictMode>
    <Timeclock />
  </React.StrictMode>
);

const cubeSolverRoot = ReactDOM.createRoot(document.getElementById('react-cube-solver'));
cubeSolverRoot.render(
  <React.StrictMode>
    <CubeSolver
      solve={
        async () => await
          fetch(`/api/solveCube?facelets=${getFacelets()}`)
            .then(res => res.json())
      } />
  </React.StrictMode>
);
