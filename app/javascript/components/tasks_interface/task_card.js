import React from 'react'
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

// Code adapted from https://material-ui.com/components/cards/
// and https://material-ui.com/components/progress/w

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: 20
    },
    avatar: {
        background: 'white',
        color: 'black'
    },
    priorityLow: {
        backgroundColor: 'lightGreen'
    },
    priorityModerate: {
        backgroundColor: 'lightSalmon'
    },
    priorityHigh: {
        backgroundColor: 'red'
    },

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

    // For deleting individual tasks
    const deleteTask = (id) => {
        if (window.confirm("Do you want to delete this task?")) {
            axios({
                method: 'DELETE',
                url: `/tasks/${id}`
            }).then((response) => {
                props.getAllTasks() //id Update tasks state to update list
            })
        }
    }

    return (
        <Card className={classes.root} variant="outlined">
            <Box display="flex" alignItems="center">
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {props.index + 1}
                        </Avatar>
                    }

                    title={props.task.title}
                    subheader={props.task.deadline != null
                    && `Deadline: ${moment(props.task.deadline.toString()).format('DD-MM-YYYY')}`}
                />
                {props.task.priority !== "None" && <Chip
                    className={props.task.priority === "High" ? classes.priorityHigh
                        : props.task.priority === "Moderate" ? classes.priorityModerate
                            : props.task.priority === "Low" ? classes.priorityLow
                                : null}
                    label={props.task.priority}
                />}
            </Box>

            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.task.description}
                </Typography>
            </CardContent>

            <CardContent>
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <BorderLinearProgress variant="determinate" value={props.task.progress}/>
                    </Box>
                    <Typography variant="body1" color="textSecondary">
                        {`${props.task.progress}%`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton
                    onClick={() => deleteTask(props.task.id)}
                >
                    <DeleteIcon/>
                </IconButton>
            </CardActions>

        </Card>
    )

}

export default TaskCard