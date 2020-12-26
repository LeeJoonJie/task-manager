import React from 'react'
import HomePage from './home_page'
import TaskForm from "./task_form/task_form";
import Task from './task'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new" render={(props) => <TaskForm {...props} />} />
                    <Route exact path="/tasks/indiv/:id" component={Task} />
                    <Route exact path="/tasks/indiv/:id/edit" component={Task} />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default App
