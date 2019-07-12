import React from 'react';

export default class Search extends React.Component {
    state = {
        "cityName": "",
        "weatherInfo": {}
    };

    searchChangeHandler = (event) => {
        this.setState({
            "cityName": event.target.value
        })
    }

    getWeatherInfo = () => {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&APPID=f928fc47a3bf8f81fc0b6d9aa579f989&units=metric";

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.result(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        return (
            <div className="searchCont">
                <div className="inputCont">
                    <input value={this.state.cityName} onChange={this.searchChangeHandler} />
                </div>
                <div className="btnCont">
                    <button onClick={this.getWeatherInfo}>Get Weather Info</button>
                </div>
            </div>
        )
    }


}