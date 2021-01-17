import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import moment from "moment"
import CardActionArea from "@material-ui/core/CardActionArea"
import React from "react"
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'whiteSmoke',
        margin: '0px 0px 10px 0px'
    },
    header: {
        padding: '5px 16px 5px 16px',
    },
    headerAction: {
        margin: 15
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
}))

const CardHead = (props) => {

    const classes = useStyles()

    return (
        <CardActionArea className={classes.root}>
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

    )
}

export default CardHead