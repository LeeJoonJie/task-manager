import React from 'react'
import HomePage from './home_page'
import TaskForm from "./task_form/task_form";
import Task from './task'
import { Route, Switch } from 'react-router-dom'
import {Button} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

class App extends React.Component {

    HomeButton() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="home"
                    startIcon={<HomeIcon/>}
                    onClick={() => {
                        this.props.history.push('/')
                    }}
                >
                    Home
                </Button>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.HomeButton()}
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
