import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
       
        return (
            <div>
                I am pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
