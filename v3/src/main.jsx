import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import "./index.css";
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
)
