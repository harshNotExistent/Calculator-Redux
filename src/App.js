
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";
import { connect } from 'react-redux';
import {operations} from './Actions/actions'
class App extends Component {
    onClick = button => {
      const {dispatch,result}=this.props;
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
          dispatch(operations.onClick(button,result))
      }
  };
    calculate = () => {
      const {dispatch,result}=this.props;
     
         dispatch(operations.calculate(result))
  };

  reset = () => {
      const {dispatch,result}=this.props;
      dispatch(operations.reset(result));
  };

  backspace = () => {
    const {dispatch,result}=this.props;
    dispatch(operations.backspace(result))
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