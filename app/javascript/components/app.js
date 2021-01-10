import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from "./home_page/home_page"
import TaskForm from "./task_form/task_form"
import TaskView from "./task_view"
import AppHeader from "./app_header"
import {withStyles} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import ScrollTop from "./scroll_top"
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
    box: {
        padding: 50
    }
}

class App extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div>
                <AppHeader />
                <Toolbar id="back-to-top-anchor" />
                <Box className={classes.box}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/new" render={(props) => <TaskForm {...props} />}/>
                        <Route exact path="/tasks/indiv/:id" component={TaskView}/>
                        <Route exact path="/tasks/indiv/:id/edit" render={(props) => <TaskForm {...props} />}/>
                        )} />
                    </Switch>
                </Box>
                <ScrollTop {...this.props}/>
            </div>

        )
    }
}

export default withStyles(styles)(App)
