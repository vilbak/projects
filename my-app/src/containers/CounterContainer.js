import React from 'react';
import PropTypes from 'prop-types'
import Counter from '../views/counter/index';

class CounterContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {

        this.setState({
            count: this.state.count + 1
        });

    }

    decrementCounter = () => {

        this.setState({
            count: this.state.count - 1
        });

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
            
        } />
        
    }
}

CounterContainer.propTypes = {
    count: PropTypes.number,
    incrementCounter: PropTypes.func,
    decrementCounter: PropTypes.func,
    resetCounter: PropTypes.func
};


export default CounterContainer;