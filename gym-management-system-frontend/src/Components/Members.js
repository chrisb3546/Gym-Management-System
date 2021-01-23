import React, { Component } from 'react'
import Member from './Member'

class Members extends Component {
    render() {
        let memberArray = this.props.members.map(member => <Member key={member.id} id={member.id} name={member.name} />)
        return (
            <div>
                {memberArray}
            </div>
        )
    }
}
export default Members
