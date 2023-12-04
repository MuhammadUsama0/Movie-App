import React from 'react';
import './App.css';
import Movielist from './components/Movielist';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Movielist/>
      <Footer/>
    </div>
  );
}

export default App;
