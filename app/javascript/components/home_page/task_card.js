import React, {useState} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {LinearProgress} from '@material-ui/core'
import axios from "axios"
import Box from "@material-ui/core/Box"
import Chip from '@material-ui/core/Chip'
import moment from "moment"
import CardActionArea from '@material-ui/core/CardActionArea'
import {Link, useHistory} from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Tooltip from '@material-ui/core/Tooltip'

// Code adapted from https://material-ui.com/components/cards/
// and https://material-ui.com/components/progress/w

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
    },
    avatar: {
        background: 'whiteSmoke',
        color: 'black',
        alignItems: 'flex-start',
        fontSize: `1.2rem`
    },
    priorityLow: {
        borderColor: 'green',
        color: 'green',
        border: '3px solid'
    },
    priorityModerate: {
        borderColor: 'steelBlue',
        color: 'steelBlue',
        border: '3px solid'
    },
    priorityHigh: {
        borderColor: 'red',
        color: 'red',
        border: '3px solid'
    },
    priorityNone: {
        borderColor: 'whiteSmoke'
    },
    header: {
        backgroundColor: 'whiteSmoke'
    },
    headerAction: {
        margin: 15
    },
    actions: {
        justifyContent: 'flex-end'
    },
    tags: {
        "&:disabled": {
            backgroundColor: 'lightGrey',
            color: 'black'
        }
    }

}))

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress)

const TaskCard = (props) => {

    const classes = useStyles()
    const [deleteOpen, setDeleteOpen] = useState(false)
    let history = useHistory()

    // For deleting individual tasks
    const deleteTask = (id) => {
        axios({
            method: 'DELETE',
            url: `/tasks/${id}`
        }).then((response) => {
            props.actionAfterDelete() //id Update tasks state to update list
        })
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <Link to={`/tasks/indiv/${props.task.id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <CardHeader
                        className={classes.header}
                        avatar={
                            props.index !== null &&
                            <Avatar className={classes.avatar}>
                                {props.index + 1}
                            </Avatar>
                        }
                        action={
                            <Chip
                                className={props.task.priority === "High" ? classes.priorityHigh
                                    : props.task.priority === "Moderate" ? classes.priorityModerate
                                        : props.task.priority === "Low" ? classes.priorityLow
                                            : classes.priorityNone}
                                variant="outlined"
                                size="medium"
                                label={props.task.priority !== "None" &&
                                <Typography variant="subtitle1">
                                    {props.task.priority}
                                </Typography>}
                            />}
                        classes={{action: classes.headerAction}}
                        title={
                            <Typography variant="h5" color="textPrimary">
                                {props.task.title}
                            </Typography>}
                        subheader={
                            <Typography variant="body1" color="textSecondary">
                                {props.task.deadline !== null ?
                                    `Deadline: ${moment(props.task.deadline.toString()).format('DD-MM-YYYY')}`
                                    : 'No deadline'}
                            </Typography>}
                    />
                </Link>
            </CardActionArea>
            <CardContent>
                <Grid container spacing={1}>
                    {props.task.tags.map(tag => (
                        <Grid item key={tag}>
                            <Button
                                disabled
                                key={tag}
                                className={classes.tags}
                                size="small"
                                variant="contained"
                            >
                                {tag}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>

            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    {props.task.description}
                </Typography>
            </CardContent>

            <CardContent>
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={2}>
                        <BorderLinearProgress variant="determinate" value={props.task.progress}/>
                    </Box>
                    <Typography variant="body1" color="textPrimary">
                        {`${props.task.progress}%`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions disableSpacing className={classes.actions}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => history.push(`/tasks/indiv/${props.task.id}/edit`)}>
                        <EditIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => setDeleteOpen(true)}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
                <Dialog
                    open={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                >
                    <DialogTitle>Delete Task?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {`Are you sure you want to delete ${props.task.title}?`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => deleteTask(props.task.id)} color="secondary" autoFocus>
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>
            </CardActions>

        </Card>
    )

}

export default TaskCard