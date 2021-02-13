import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegCamp';


export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Varish Gautam'
        }
    }

   componentDidMount(){
       setInterval(()=>{
           this.setState({name:'Varish Gautam'})
       }, 3000);
   }
    

    render() {
        return (
            <div>
                I am the Parent Comp.

                <RegComp name= {this.state.name} />
                <PureComp name= {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
