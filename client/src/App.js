import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Footer from './components/footer/Footer.js'
import ScrollToTop from './components/scroll/ScrollToTop'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <ScrollToTop/>
          <Header />
          <MainPages />
        </div>
          </Router>
        <Footer/>
        
     
    </DataProvider>
    
  );
}

export default App;
