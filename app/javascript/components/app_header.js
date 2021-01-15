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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#25282c'
    },
    title: {
        color: "white",
        margin: "25px 0px 0px 0px"
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
    tab: {
        color: 'white',
        "&:hover": {
            backgroundColor: 'grey',
        }
    },
    selectedTab: {
        color: '#FF6700',
        "&:hover": {
            backgroundColor: 'grey',
        }
    },
    indicator: {
        height: 4,
        color: '#FF6700'
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
                <Grid container justify="space-between">
                    <Grid item xs={2}>
                        <Link to="/" className={classes.link}>
                            <Typography variant="h5" noWrap className={classes.title}>
                                Task Manager
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Tabs
                            centered
                            value={props.tabValue}
                            onChange={handleTabChange}
                            classes={{indicator: classes.indicator}}
                        >
                            <Tooltip title="Home">
                                <Tab label="Home"
                                     className={props.tabValue === 0 ? classes.selectedTab : classes.tab}
                                     icon={<HomeIcon fontSize="large"/>}/>
                            </Tooltip>
                            <Tooltip title="Add Task">
                                <Tab label="Add Task"
                                     className={props.tabValue === 1 ? classes.selectedTab : classes.tab}
                                     icon={<AddIcon fontSize="large"/>}/>
                            </Tooltip>
                        </Tabs>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>

                </Grid>
            </Toolbar>

        </AppBar>

    )
}

export default AppHeader