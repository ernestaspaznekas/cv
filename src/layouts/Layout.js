import React, { Component } from 'react'
import 'typeface-roboto'
import Header from '../components/AppComponents/Header'
import Footer from '../components/AppComponents/Footer'
//import Grid from '../utils/Grid'
import Map from '../utils/GoogleMap'
//import Grid2 from '../Grid'
import ContactForm from '../utils/ContactFrom'

//import Section from '../components/AppComponents/Section'

class App extends Component {
  state = {
    map: true,
    contact: false
  };

  handleFooterChange = (value) => {
    let newState = {}

    Object.entries(this.state).forEach(([key, val]) => {
      if (value === key) {
        newState[key] = !this.state[value]       
      } else /*if (this.state[key] === true)*/ {
        newState[key] = false       
      }
    })

    console.log(newState)

    this.setState(newState)
  }

  render () {

    let Body = false
    if (this.state.map) {
      Body = (<Map />)
    }
    if (this.state.contact) {
      Body = (<ContactForm />)
      
    }

    return (
      <div>
        <Header />
        {/*<Section />
        <Grid />
        <Grid2 />*/}
        {Body}
        <Footer handleChange={this.handleFooterChange}/>
      </div>
    );
  }
}

export default App;
