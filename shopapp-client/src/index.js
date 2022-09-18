import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShopApp from './ShopApp';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ShopApp />
    </Router>
  </React.StrictMode>
);



