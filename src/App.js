
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";
import { connect } from 'react-redux';
import {operations} from './Actions/actions'
class App extends Component {
    onClick = button => {
      const {dispatch}=this.props;
      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          dispatch(operations.onClick(button))
      }
  };
    calculate = () => {
      const {dispatch}=this.props;
     
         dispatch(operations.calculate())
  };

  reset = () => {
      const {dispatch}=this.props;
      dispatch(operations.reset());
  };

  backspace = () => {
    const {dispatch}=this.props;
    dispatch(operations.backspace())
  };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.props.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
  const {result}=state;
  return {
    result
  }
}

export default connect(mapStateToProps)(App);