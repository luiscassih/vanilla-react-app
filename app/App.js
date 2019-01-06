import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Main from "./Components/Main"
import "./styles/app.scss"

export class NotFound extends Component {
    render() {
        return(<div>Not Found, lol</div>)
    }
}

export default class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Main} />
                <Redirect to="/404" />
            </Switch>
        )
    }
}