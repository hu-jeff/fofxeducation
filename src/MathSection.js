import React, {Component} from 'react';
import './MathSection.css'

class MathSection extends Component {
    render() {
        return (
            <h1>Math {this.props.level}</h1>
        )
    }
}

export default MathSection