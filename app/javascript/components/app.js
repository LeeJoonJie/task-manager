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
        padding: '0px 30px 0px 30px'
    },
    toolbar: {
        minHeight: 0,
        height: 10,
        margin: 0,
        padding: 0,
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {tabValue: 0}
        this.setState = this.setState.bind(this)
        this.setTabValue = this.setTabValue.bind(this)
    }

    setTabValue(newValue) {
        this.setState({tabValue: newValue})
    }

    render() {

        const {classes} = this.props

        return (
            <div>
                <AppHeader tabValue={this.state.tabValue}
                           setTabValue={this.setTabValue} />
                <Toolbar id="back-to-top-anchor" className={classes.toolbar}/>
                <Box className={classes.box}>
                    <Switch>
                        <Route exact path="/" render={(props) =>
                            <HomePage setTabValue={this.setTabValue}/>}/>
                        <Route exact path="/new" render={(props) =>
                            <TaskForm {...props} setTabValue={this.setTabValue}/>}/>
                        <Route exact path="/tasks/indiv/:id" render={(props) =>
                            <TaskView setTabValue={this.setTabValue}/>} />
                        <Route exact path="/tasks/indiv/:id/edit" render={(props) =>
                            <TaskForm {...props} setTabValue={this.setTabValue}/>}/>
                        )} />
                    </Switch>
                </Box>
                <ScrollTop {...this.props}/>
            </div>

        )
    }
}

export default withStyles(styles)(App)
