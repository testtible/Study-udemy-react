import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1,2,3],
            a: 1,
            b: "2",
            c: {a: 215}
        }
    }

    test = () => {
        this.setState((prevState) => ({
            ...prevState
        }));
    };

    render() {
        console.log(this.state);
        return (
            <button onClick={this.test}>
                a
            </button>
        );
    }
};

export default Test;