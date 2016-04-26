import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchWeather} from '../actions/index'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>City</td>
                        <td>Temprature (C°)</td>
                        <td>Pressure (hPa)</td>
                        <td>Humidity (%)</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderWeather(cityData) {
        const city = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        //const lat = cityData.city.coord.lat;
        //const lon = cityData.city.coord.lon;
        const {lon,lat} = cityData.city.coord;

        return (
            <tr key={city}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="green" units="C°"/></td>
                <td><Chart data={humidity} color="orange" units="hPa"/></td>
                <td><Chart data={pressure} color="gray" units="%"/></td>
            </tr>
        );
    }
}

// get state value from reducer
function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);
