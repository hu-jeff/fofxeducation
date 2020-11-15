import React, {Component} from 'react';
import './MathSection.css'

class MathSection extends Component {
    render() {
        return (
            <a href={'https://www.google.com'}>Math {this.props.level}</a>
        )
    }
}

export default MathSection