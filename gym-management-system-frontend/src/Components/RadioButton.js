import React, { Component } from 'react'

 class RadioButton extends Component {
    render() {
        return (
            <div>
                 <input key={this.props.id} id={this.props.id} name="radioButton" onClick={this.props.handleClick} type="radio" data-price={this.props.price} value={this.props.name} /> {this.props.name}
            </div>
        )
    }
}
export default RadioButton