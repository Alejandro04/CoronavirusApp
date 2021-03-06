import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CountryCases from './components/CountryCases'
import ChartsConfirmedComponent from './components/ChartsConfirmed'
import ChartsDeathComponent from './components/ChartsDeath'
import { loadCountries, 
  setCountry, 
  setCountryChartConfirmed, 
  setCountryChartDeath,
  setCountryToGetCities } from './effects/Countries'
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
import Grid from '@material-ui/core/Grid';

const timeArea = {
  textAlign: 'center',
  margin: 'auto',
  marginTop: '120px'
};

const appContainer = {
  margin: 'auto',
  marginTop: '40px'
}

const titleConfirm = {
  fontSize: '16px',
  margin: 'auto',
  background: 'green',
  color: 'white',
  padding: '8px',
  borderRadius: '20px',
  marginRight: '0',
  textAlign: 'center'
}

const titleNoConfirm = {
  fontSize: '16px',
  margin: 'auto',
  background: 'red',
  color: 'white',
  padding: '8px',
  borderRadius: '20px',
  marginRight: '0',
  textAlign: 'center'
}

const buttonStyle = {
  margin: 'auto',
  padding: '15px',
  fontSize: '20px',
}

const venezuelaTitle = {
  position: 'relative',
  top: '10px'
}

class App extends Component {

  componentDidMount() {
    let payload = {
      country: 'venezuela'
    }
    this.props.setCountry(payload)
    this.props.setCountryToGetCities(payload)
    localStorage.setItem('country', 'Venezuela')
    localStorage.setItem('countryTitleMap', 'Venezuela')
  }

  render() {

    const handleGraphic = () => {
      let country = localStorage.getItem('country')
      localStorage.setItem('countryTitleMap', country)
      this.props.setCountryChartConfirmed(country)
      this.props.setCountryChartDeath(country)
    };

    const {
      confirmed,
      recovered,
      deaths,
      loading,
      error,
      selectCountry,
      setCountry,
      chartsConfirmed,
      chartsDeath,
      cities
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
            <Typography style={venezuelaTitle}>Casos específicos para Venezuela</Typography>
            <Typography style={titleConfirm}>Actualizado: {cities.data.lastUpdate}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <VenezuelaCases cities={cities} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Gráfico: Curva de casos detectados</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid>
              <Grid>
                <Button variant="contained" color="primary"
                  onClick={handleGraphic}
                  style={buttonStyle}>Actualizar Mapa para {localStorage.getItem('country')}</Button>
              </Grid>
              <Grid>
                <ChartsConfirmedComponent chartsConfirmed={chartsConfirmed} />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Gráfico: Curva de fallecidos</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid>
              <Grid>
                <Button variant="contained" color="primary"
                  onClick={handleGraphic}
                  style={buttonStyle}>Actualizar Mapa para {localStorage.getItem('country')}</Button>
              </Grid>
              <Grid>
                <ChartsDeathComponent chartsDeath={chartsDeath} />
              </Grid>
            </Grid>
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
  if (state.Countries.data.error) {
    return {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      loading: state.Countries.loading,
      error: state.Countries.error,
      chartsConfirmed: '',
      chartsDeath: '',
      cities: '',
    }
  } else {
    return {
      confirmed: state.Countries.data.confirmed.value,
      recovered: state.Countries.data.recovered.value,
      deaths: state.Countries.data.deaths.value,
      loading: state.Countries.loading,
      error: state.Countries.error,
      chartsConfirmed: state.ChartsConfirmed,
      chartsDeath: state.ChartsDeath,
      cities: state.Cities
    }
  }
}

const mapDispatchToProps = dispatch => ({
  loadCountries: () => dispatch(loadCountries()),
  setCountry: payload => dispatch(setCountry(payload)),
  setCountryChartConfirmed: payload => dispatch(setCountryChartConfirmed(payload)),
  setCountryChartDeath: payload => dispatch(setCountryChartDeath(payload)),
  setCountryToGetCities: payload => dispatch(setCountryToGetCities(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);