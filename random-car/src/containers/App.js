import React, { Component } from 'react';
import axios from 'axios';
import Randomcar from '../RandomCar/randomcar';

class App extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        console.log("ddd")
        axios.get('http://tasks-application-leopard.herokuapp.com/users').then(res => {
            this.setState({ users: res.data });
        })
    }

    render() {
        const users = this.state.users.map(user => {
            console.log(user)
            return <Randomcar name={user.name} />;
        });
        return (
            <div>
                { users}
            </div>

        );
    }

}

export default App; 