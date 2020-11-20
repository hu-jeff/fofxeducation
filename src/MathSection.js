import React, {Component} from 'react';
import './MathSection.css'

class MathSection extends Component {
    render() {
        return (
            <a href={`/docs/math${this.props.level}.html`}>Math {this.props.level}</a>
        )
    }
}

export default MathSection