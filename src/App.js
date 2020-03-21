import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import Charts from './components/Charts'
import { loadCountries, setCountry } from './effects/Countries'
import { setCountryChartConfirmed, setCountryChartRecovered, setCountryChartDeath } from './effects/Charts'
import { connect } from 'react-redux'
import VenezuelaCases from './components/venezuelaCases'

//MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const timeArea = {
  textAlign: 'center',
  margin: 'auto',
  marginTop: '120px'
};

const appContainer = {
  margin: 'auto',
  marginTop: '40px'
}

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
      setCountry,
      chartsConfirmed,
      chartsRecovered,
      chartsDeath
    } = this.props

    if (loading) {
      return <div style={timeArea}><CircularProgress /></div>
    }
    if (error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
    }

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Specific cases for Venezuela / Casos específicos para Venezuela</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <VenezuelaCases />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Gráfico: Casos diarios por País</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Charts chartsConfirmed={chartsConfirmed} chartsRecovered={chartsRecovered} chartsDeath={chartsDeath} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="App" style={appContainer}>
          <Header selectCountry={selectCountry} setCountry={setCountry} />
          <CountryCases confirmed={confirmed} recovered={recovered} deaths={deaths} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  console.log(state)
  if (state.Countries.data.error) {
    return {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      loading: state.Countries.loading,
      error: state.Countries.error,
      ChartsConfirmed: '',
      ChartsRecovered: '',
      ChartsDeath: ''
    }
  } else {
    return {
      confirmed: state.Countries.data.confirmed.value,
      recovered: state.Countries.data.recovered.value,
      deaths: state.Countries.data.deaths.value,
      loading: state.Countries.loading,
      error: state.Countries.error,
      chartsConfirmed: state.ChartsConfirmed,
      chartsRecovered: state.ChartsRecovered,
      chartsDeath: state.ChartsDeath
    }
  }
}

const mapDispatchToProps = dispatch => ({
  loadCountries: () => dispatch(loadCountries()),
  setCountry: payload => dispatch(setCountry(payload)),
  setCountryChartConfirmed: payload => dispatch(setCountryChartConfirmed(payload)),
  setCountryChartRecovered: payload => dispatch(setCountryChartRecovered(payload)),
  setCountryChartDeath: payload => dispatch(setCountryChartDeath(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);