import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class Notes extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.match.url)}
            </div>

        )
    }
}

export default Notes