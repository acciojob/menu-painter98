import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);*/

ReactDOM.render( 
    <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root'));
