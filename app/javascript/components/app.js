import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from "./home_page/home_page";
import TaskForm from "./task_form/task_form"
import TaskView from "./task_view"
import AppHeader from "./app_header"
import {withStyles} from "@material-ui/core"

const styles = {
    root: {
        padding: 0
    }
}

class App extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppHeader/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/new" render={(props) => <TaskForm {...props} />}/>
                    <Route exact path="/tasks/indiv/:id" component={TaskView}/>
                    <Route exact path="/tasks/indiv/:id/edit" render={(props) => <TaskForm {...props} />}/>
                    )} />
                </Switch>
            </div>

        )
    }
}

export default withStyles(styles)(App)
