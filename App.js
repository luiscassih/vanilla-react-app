import React from 'react'
import ReactDOM from "react-dom"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import App, {NotFound} from "./app/App"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>, document.getElementById('app')
);