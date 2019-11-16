// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	addToInput = (val) => {
		return this.setState({
			input: this.state.input + val
		});
	};
	handleEqual = () => {
		return this.setState({
			input: eval(this.state.input)
		});
	};
	render() {
		return (
			<div className="App">
				<div className="container">
					<Input input={this.state.input} />
					<div className="row">
						<Button handleInput={this.addToInput}>7</Button>
						<Button handleInput={this.addToInput}>8</Button>
						<Button handleInput={this.addToInput}>9</Button>
						<Button handleInput={this.addToInput}>/</Button>
					</div>
					<div className="row">
						<Button handleInput={this.addToInput}>4</Button>
						<Button handleInput={this.addToInput}>5</Button>
						<Button handleInput={this.addToInput}>6</Button>
						<Button handleInput={this.addToInput}>*</Button>
					</div>
					<div className="row">
						<Button handleInput={this.addToInput}>1</Button>
						<Button handleInput={this.addToInput}>2</Button>
						<Button handleInput={this.addToInput}>3</Button>
						<Button handleInput={this.addToInput}>+</Button>
					</div>
					<div className="row">
						<Button handleInput={this.addToInput}>0</Button>
						<Button handleInput={this.addToInput}>.</Button>
						<Button handleInput={() => this.handleEqual()}>=</Button>
						<Button handleInput={this.addToInput}>-</Button>
					</div>
					<ClearButton
						clearHandler={() => {
							this.setState({ input: '' });
						}}
					>
						Clear
					</ClearButton>
				</div>
			</div>
		);
	}
}

App.propTypes = {};

export default App;
