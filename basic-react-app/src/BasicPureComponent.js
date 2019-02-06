import React from 'react';

class BasicPureComponent extends React.PureComponent {
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

    render() {
        console.log('basic comp render');
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default BasicPureComponent;