import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import { loadCountries } from './effects/Countries';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.loadCountries()
  }

  render() {
    const { confirmed, recovered, deaths, loading, error, selectCountry } = this.props

    if (loading) {
      return <div>Loading</div>
    }
    if (error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }

    return (
      <div className="App">
        <Header selectCountry={selectCountry}/>
        <CountryCases confirmed={confirmed} recovered={recovered} deaths={deaths}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    confirmed: state.Countries.data.confirmed.value,
    recovered: state.Countries.data.recovered.value,
    deaths: state.Countries.data.deaths.value,
    loading: state.Countries.loading,
    error: state.Countries.error,
    selectCountry: 'venezuela'
  }
}
const mapDispatchToProps = {
  loadCountries
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);