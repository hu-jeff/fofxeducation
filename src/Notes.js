import React, {Component} from 'react'
import Youtube from 'react-youtube'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class Notes extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.match.url)}
                <Youtube videoId={'RkC0l4iekYo'}/>
            </div>
        )
    }
}

export default Notes