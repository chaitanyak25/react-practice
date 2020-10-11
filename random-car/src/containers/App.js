import React, { Component } from 'react';
import axios from 'axios';
import Randomcar from '../RandomCar/randomcar';

class App extends Component {

    state = {
        randomcar: []
    }

    componentDidMount() {
        axios.get('http://tasks-application-leopard.herokuapp.com/randomcarapi').then(res => {
            this.setState({ randomcar: res.data.results });
        })
    }

    render() {
        const cars = this.state.randomcar.map(car => {
            return <Randomcar key={car._id} name={car.name} />;
        });
        return (
            <div>
                {cars}
            </div>

        );
    }

}

export default App; 