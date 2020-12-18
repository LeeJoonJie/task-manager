import React from 'react'
import HomePage from './home_page'
import NewTask from './new_task'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new" component={NewTask} />
                </Switch>
            </div>
        )
    }
}

export default App

