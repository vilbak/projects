import React from 'react';
import PropTypes from 'prop-types'
import Counter from '../views/Counter/';

class CounterContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        const number = this.state.count;
        this.setState({
            count: number + 1
        });

    }

    decrementCounter = () => {
        const number = this.state.count;
        this.setState({
            count: number - 1
        })


    }

    resetCounter = () => {

        this.setState({
            count: 0
        });

    }

    render() {
        return <Counter count = {
            this.state.count
        }
        incrementCounter = {
            this.incrementCounter
        }
        decrementCounter = {
            this.decrementCounter
        }
        resetCounter = {
            this.resetCounter

        }
        />

    }
}

export default CounterContainer;