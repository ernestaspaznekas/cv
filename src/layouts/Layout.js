import React, { Component } from 'react'
import 'typeface-roboto'
import Header from '../components/AppComponents/Header'
import Footer from '../components/AppComponents/Footer'
import Grid from '../utils/Grid'
import Map from '../utils/GoogleMap'
import Grid2 from '../Grid'
//import Section from '../components/AppComponents/Section'

class App extends Component {
  state = {
    map: true,
  };

  handleMap = (event) => {
    this.setState({map: !this.state.map});
  };

  render () {
    var Body = false
    if (this.state.map) {
      Body = (<Map />)
    }

    return (
      <div>
        <Header />
        {/*<Section />*/}
        <Grid />
        <Grid2 />
        {Body}
        <Footer handleMap={this.handleMap}/>
      </div>
    );
  }
}

export default App;
