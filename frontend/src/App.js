import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

import Home from './components/Home'

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home/>} exact />
          </Routes>
        </div>
        <Footer/>
      </div>
  );
}

export default App;