import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import global from 'global';
import { Buffer } from 'buffer';

window.global = window.global || global;
window.Buffer = window.Buffer || Buffer;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
