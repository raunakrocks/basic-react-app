import React from 'react';

class BasicComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'raunak'
        }
    }

    componentDidMount() {
        setInterval( ()=> {
            this.setState(()=> {
                return {name: 'raunak'}
            })
        }
            ,2000);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.name !== this.state.name ? true : false;
    // }

    render() {
        console.log('basic comp render');
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default BasicComponent;