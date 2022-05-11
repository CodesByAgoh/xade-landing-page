import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Section2 from './Section2';
import Section3b from './Section3b';
import Section3 from './Section3';
import Section4 from './Section4';



ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/personal" element={<Section2/>} />
      <Route path="/business" element={<Section3b/>} />
      <Route path="/contactus" element={<Section4/>} />
      <Route path="security" element={<Section3/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
