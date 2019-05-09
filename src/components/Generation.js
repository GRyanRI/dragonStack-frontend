import React, { Component } from 'react';

class Generation extends Component {
    state = { generation: { generationId: 999, expiration: '2020-05-01' } };

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
        .then(response => console.log('response', response));
    };

    componentDidMount() {
        this.fetchGeneration();
    };
    render() {
        const { generation } = this.state;

        return (
            <div>
                <h3>Generation {Generation.generationId} . Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}

export default Generation;