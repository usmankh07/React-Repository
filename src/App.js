import React from 'react';
import './App.css';
import Navbar from './components/time/navbar';
import Faq from './components/time/faq';


function App(props) {
  return (
      <>
        <Navbar title="Usman"/>
        <div className='container'>
        <h3>Faq's</h3>
        <Faq />
        </div>
      </>

     
  )
}

export default App;
