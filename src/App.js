import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import generalData from './effects/generalData'
import { connect } from 'react-redux'

class App extends Component {
  
  constructor(props) {
    super(props)
    const { generalData } = props
    generalData()
    console.log(props)
  }

  render(){
    return (
      <div className="App">
        {/*<Header selectCountry={selectCountry}/>
        <CountryCases countryCases={countryCases}/>*/}
      </div>
    );
  }
}

const MapStateToProps = state => state

const MapDispatchToProps = dispatch => ({
  generalData: payload => dispatch(generalData(payload)),
})
export default connect(MapStateToProps, MapDispatchToProps)(App);
