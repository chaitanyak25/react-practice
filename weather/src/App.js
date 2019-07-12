import React from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import "./App.css";

class app extends React.Component {
  state = {
    "result": {}
  }

  updateResult = (res) => {
    this.setState({
      "result": res
    })
  }

  render() {
    return (
      <div className="container">
        <Search result={this.updateResult}/>
        <Results result={this.state.result}/>
      </div>
    );
  }
}

export default app;
