import React, {Component} from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (
            <div className={'titleHolder'}>
                <h1 className={'Title'}>{this.props.title}</h1>
                <h1 className={'Names'}>JEFF HU | RYAN LI</h1>
            </div>
        );
    }
}

export default Title;