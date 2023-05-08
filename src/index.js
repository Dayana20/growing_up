import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DisplayP1 from './p1';
import DisplayP2 from './p2';
import DisplayP3 from './p3';
import DisplayP4 from './p4';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/growing_up" element={<App/>}/>
    <Route path="/growing_up/p1" element={<DisplayP1/>}/>
    <Route path="/growing_up/p2" element={<DisplayP2/>}/>
    <Route path="/growing_up/p3" element={<DisplayP3/>}/>
    <Route path="/growing_up/p4" element={<DisplayP4/>}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
