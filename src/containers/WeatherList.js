import React, { Component } from 'react';
import { connect } from "react-redux";

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
function mapStateToProps({ weather }) {
  // const weather = state.weather
  // in reducers/index.js, we define weather to be WeatherReducer
  // { weather } === { weather: weather }
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);