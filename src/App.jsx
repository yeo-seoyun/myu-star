import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
// import Landing from './pages/Landing';
import './App.css'

function App() {

  return (

    <Router>
      <div className="app">
        <Header />

        <main>
          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
          </Routes>
        </main>

      </div>

    </Router>
  );
}

export default App
