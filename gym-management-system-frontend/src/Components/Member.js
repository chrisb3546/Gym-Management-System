import React, { Component } from 'react'

class Member extends Component {
    render() {
        return (
            <div>
                ID{this.props.id}
                Name{this.props.name}
            </div>
        )
    }
}
export default Member
