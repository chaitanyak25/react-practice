import React from 'react';

export default class Search extends React.Component {
    render() {
        return (<div className="searchRes">
            <label className="temp-res">{this.getWeatherInfo('temp')}<sup>o</sup></label><br />
            <label className="temp-humidity">{this.getWeatherInfo('humidity')}<sup>o</sup></label><br />
        </div>)
    }

    getWeatherInfo = (key) => {
        if (!this.props.result.main) {
            return "";
        } else {
            return this.props.result.main[key];
        }
    }
}