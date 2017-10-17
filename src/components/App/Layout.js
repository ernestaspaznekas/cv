import React, { Component } from 'react'
import 'typeface-roboto'
import Header from '../AppComponents/Header'
import Footer from '../AppComponents/BottomNavigation'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
