import React, { Component } from 'react'
import UpdateComp from './UpdateComp'
export class Click extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        };
    }
    UpdateClick= ()=> {
        this.setState({count: this.state.count+1})
    };
    
    render() {
        const { count }= this.state;
        return (
            <div>
                <button onClick= {this.UpdateClick}>{this.props.name} Clicked {count} Time</button>
            </div>
        )
    }
}

export default UpdateComp(Click);

