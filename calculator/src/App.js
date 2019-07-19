import React from 'react';
import './App.css';

let CalcKey = (props) => {
  return (
    <button className="btnCss" onClick={() => props.click(props.value)}>{props.value}</button>
  );
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "inputValues": "",
      "calculatedValue": "0",
      "firstValue": "",
      "operator": "",
      "fullString": ""
    }
  }

  resetState() {
    this.setState({
      "inputValues": "",
      "calculatedValue": "0",
      "firstValue": "",
      "operator": "",
      "fullString": ""
    });
  }

  keyClickHandler = (val) => {
    let inputValues = this.state.inputValues;
    let firstValue = this.state.firstValue;
    let operator = this.state.operator;
    let fullString = this.state.fullString;
    this.setState({
      "fullString": fullString + val
    });
    if (val === "+" || val === "-" || val === "x" || val === "/") {
      operator = val;
      val = "operator";
    }
    switch (val) {
      case "operator":
        if (this.state.calculatedValue !== "0") {
          firstValue = this.state.calculatedValue;
        } else {
          firstValue = inputValues;
        }
        this.setState({
          "firstValue": firstValue,
          "operator": operator,
          "inputValues": ""
        });
        break;
      case "=":
        this.doCalculation(firstValue, operator, inputValues);
        break;
      case "AC":
        this.resetState();
        break;
      default:
        let newNum = inputValues + val;
        if (firstValue !== "" && operator !== "") {
          this.doCalculation(firstValue, operator, newNum);
        }
        this.setState({
          "inputValues": newNum
        });
    }
  }

  doCalculation = (firstValue, operator, inputValues) => {
    let res;
    switch (operator) {
      case "+": res = Number(firstValue) + Number(inputValues);
        break;
      case "-": res = Number(firstValue) - Number(inputValues);
        break;
      case "x": res = Number(firstValue) * Number(inputValues);
        break;
      case "/": res = Number(firstValue) / Number(inputValues);
        break;
      default: res = 0;
    }
    this.setState({
      "calculatedValue": res
    })
    return res;
  }

  render() {
    return (
      <div className="App">
        <div className="resultsContainer">
          <div className="row">
            <input defaultValue={this.state.fullString} className="inputCont"></input>
          </div>
          <div className="row">
            <input readOnly value={this.state.calculatedValue} className="resCont"></input>
          </div>
        </div>
        <div className="row">
          <CalcKey value={1} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={2} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={3} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={"+"} click={this.keyClickHandler}></CalcKey>
        </div>
        <div className="row">
          <CalcKey value={4} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={5} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={6} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={"-"} click={this.keyClickHandler}></CalcKey>
        </div>
        <div className="row">
          <CalcKey value={7} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={8} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={9} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={"x"} click={this.keyClickHandler}></CalcKey>
        </div>
        <div className="row">
          <CalcKey value={"."} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={0} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={"AC"} click={this.keyClickHandler}></CalcKey>
          <CalcKey value={"/"} click={this.keyClickHandler}></CalcKey>
        </div>

      </div>
    )
  }
}

export default App;
