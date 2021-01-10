import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import HomeIcon from "@material-ui/icons/Home"
import Tooltip from "@material-ui/core/Tooltip"
import {useHistory} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20
    },
    grow: {
        flexGrow: 1,
    },
    home: {
        color: 'white'
    }
}))

const AppHeader = (props) => {
    const classes = useStyles()
    const history = useHistory()

    return (

        <AppBar position="sticky" className={classes.root}>
            <Toolbar>

                <Typography className={classes.title} variant="h6" noWrap>
                    Task Manager
                </Typography>

                <div className={classes.grow}/>
                <Tooltip title="Home">
                    <IconButton
                        className={classes.home}
                        variant="contained"
                        onClick={() => {
                            history.push('/')
                        }}
                    >
                        <HomeIcon/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>

    )
}

export default AppHeader