import React, { Component } from 'react';
import PropTypes from'prop-types'
import CounterControl from './CounterControls.js'

export default class Counter extends Component {
    static defaultProps={
        initialValue:10,
        step:2
    }
    static propTypes={
        initialValue:PropTypes.number,
        step:PropTypes.number
    }
  state = {
    value: this.props.initialValue,
  };

  handlerIncrement = () => {
    this.setState((prevState,props)=>{
        return{
            value:prevState.value+ props.step
        }
    });
  };

  handleDecrement = () => {
    this.setState({
      value: this.state.value - this.props.step,
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <CounterControl onIncrement={this.handlerIncrement} onDecrement={this.handleDecrement}></CounterControl>
      </div>
    );
  }
}
