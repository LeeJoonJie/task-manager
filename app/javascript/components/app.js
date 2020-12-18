import React from 'react'
import HomePage from './home_page'
import NewTask from './new_task'
import Task from './Task'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new" component={NewTask} />
                    <Route exact path="/tasks/indiv/:id" component={Task} />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default App

