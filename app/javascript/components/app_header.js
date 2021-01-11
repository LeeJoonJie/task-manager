import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HomeIcon from "@material-ui/icons/Home"
import AddIcon from "@material-ui/icons/Add"
import Tooltip from "@material-ui/core/Tooltip"
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {Tab, Tabs} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "cornflowerblue"
    },
    title: {
        color: "white"
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        color: 'white'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        backgroundColor: 'inherit',
        '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'inherit'
        }
    },
    tabs: {
        color: 'white'
    },
    divider: {
        padding: 0,
        height: 30,
        margin: 4,
        background: 'white'
    }
}))

const AppHeader = (props) => {
    const classes = useStyles()
    const history = useHistory()

    const handleTabChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                return history.push('/')
            case 1:
                return history.push('/new')
            case -1:
                props.setTabValue(-1)
                return
            default:
                return history.push('/')
        }
    }

    return (

        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Task Manager
                    </Typography>
                </Link>

                <div className={classes.grow}/>
                <Tabs
                    value={props.tabValue}
                    className={classes.tabs}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="on"
                >
                    <Tooltip title="Home">
                        <Tab label="Home" icon={<HomeIcon/>}/>
                    </Tooltip>
                    <Tooltip title="Add Task">
                        <Tab label="Add Task" icon={<AddIcon/>}/>
                    </Tooltip>
                </Tabs>

            </Toolbar>
        </AppBar>

    )
}

export default AppHeader