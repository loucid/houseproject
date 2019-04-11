import React, { Component } from 'react'
import Navbar from './navigation/Navbar'
import CardList from './cards/CardList'
import Footer from './navigation/Footer'
import Filters from './cards/Filters'

import './App.css'
//import FilterBar from './components/Filterbar';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#292F33', height: '90vh'}}>
          <Navbar>
            <Filters>
            <div style={{height: '110vh', backgroundColor: '#CCD6DD', paddingTop: '1em'}}>
                <CardList />
            </div>
            </Filters>
            <Footer />
          </Navbar>
      </div>
    );
  }
}

export default App;