import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Error from '../src/pages/Error'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import FicheLogement from '../src/pages/FicheLogement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
