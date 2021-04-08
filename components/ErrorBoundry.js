import React, { Component } from 'react';

//error boundries are not part of react hooks at this time
//luckily stateful objects didn't go anywhere so if you
//need a boundry it's the same as before

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops! That is not good. Something is broken.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundry;