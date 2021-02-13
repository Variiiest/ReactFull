import React, { Component } from 'react'
const UpdateComp = OriginalComp => {

    class NewComp extends Component {
        render() {
            return <OriginalComp name='The User' />
        }
    }
    return NewComp;

}

export default UpdateComp
