import React from 'react'
import HomePage from './home_page'
import Task from './Task'
import TaskForm from './task_form'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new" component={TaskForm} />
                    <Route exact path="/tasks/indiv/:id" component={Task} />
                    <Route exact path="/tasks/indiv/:id/edit" component={TaskForm} />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default App
