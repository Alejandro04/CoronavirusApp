import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import Charts from './components/Charts'
import { loadCountries, setCountry, setCountryChartConfirmed } from './effects/Countries'
import { connect } from 'react-redux'
import VenezuelaCases from './components/venezuelaCases'

//MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const timeArea = {
  textAlign: 'center',
  margin: 'auto',
  marginTop: '120px'
};

const appContainer = {
  margin: 'auto',
  marginTop: '40px'
}

const title = {
  fontSize: '16px',
  margin: 'auto',
  background: 'orange',
  color: 'white',
  padding: '8px',
  borderRadius: '20px',
  marginRight: '0',
  textAlign: 'center'
}

class App extends Component {

  componentDidMount() {
    localStorage.setItem('country', 'Seleccione...')
  }

  render() {

    const handleGraphic = () => {
      let country = localStorage.getItem('country')
      this.props.setCountryChartConfirmed(country)
    };


    const {
      confirmed,
      recovered,
      deaths,
      loading,
      error,
      selectCountry,
      setCountry,
      chartsConfirmed
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
            <Typography>Casos específicos para Venezuela</Typography>
            <Typography style={title}>Sin Confirmar</Typography>
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
            <Typography>Gráfico: Casos diarios detectados por país seleccionado</Typography>
            <Typography style={title}>En Desarrollo</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Button variant="contained" color="primary" onClick={handleGraphic}>Actualizar Mapa</Button>
            <Charts chartsConfirmed={chartsConfirmed} />
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
    }
  } else {
    return {
      confirmed: state.Countries.data.confirmed.value,
      recovered: state.Countries.data.recovered.value,
      deaths: state.Countries.data.deaths.value,
      loading: state.Countries.loading,
      error: state.Countries.error,
      chartsConfirmed: state.ChartsConfirmed,
    }
  }
}

const mapDispatchToProps = dispatch => ({
  loadCountries: () => dispatch(loadCountries()),
  setCountry: payload => dispatch(setCountry(payload)),
  setCountryChartConfirmed: payload => dispatch(setCountryChartConfirmed(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);