import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import { loadCountries, setCountry } from './effects/Countries'
import { connect } from 'react-redux'
import VenezuelaCases from './components/venezuelaCases'

//MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';

const timeArea = {
  textAlign: 'center',
  margin: 'auto',
  marginTop: '120px'
};

class App extends Component {

  componentDidMount() {
    this.props.loadCountries()
    localStorage.setItem('country', 'venezuela')
  }

  render() {
    const {
      confirmed,
      recovered,
      deaths,
      loading,
      error,
      selectCountry,
      setCountry
    } = this.props

    if (loading) {
      return <div style={timeArea}><CircularProgress /></div>
    }
    if (error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }

    return (
      <div className="App">
        <Header selectCountry={selectCountry} setCountry={setCountry} />
        <CountryCases confirmed={confirmed} recovered={recovered} deaths={deaths} />
        <VenezuelaCases />
      </div>
    );
  }

}

const mapStateToProps = state => {
  if(state.Countries.data.error){
    return {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      loading: state.Countries.loading,
      error: state.Countries.error
    }
  }else{
    return {
      confirmed: state.Countries.data.confirmed.value,
      recovered: state.Countries.data.recovered.value,
      deaths: state.Countries.data.deaths.value,
      loading: state.Countries.loading,
      error: state.Countries.error
    }
  }
}

const mapDispatchToProps = dispatch => ({
  loadCountries: () => dispatch(loadCountries()),
  setCountry: payload => dispatch(setCountry(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);