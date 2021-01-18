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
        margin: '0px 0px 10px 0px',
        overflow: 'auto'
    },
    header: {
        padding: '2px 16px 5px 16px'
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
    typography: {
        fontWeight: 600
    },
    deadline: {
        fontSize: '1.2rem'
    },
    deadlineOverdue: {
        fontSize: '1.2rem',
        color: 'red'
    }
}))

const CardHead = (props) => {

    const classes = useStyles()
    const deadline = moment(props.task.deadline.toString())
    const daysLeft = deadline.diff(moment.now(), 'days')
    const deadlineDisplay  = daysLeft >= 0 ? `${daysLeft} days to ${deadline.format('DD-MM-YYYY')}`
        : `${Math.abs(daysLeft)} days past ${deadline.format('DD-MM-YYYY')}`

    console.log(moment(props.task.deadline.toString()).diff(moment.now(), 'days'))
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
                        <Typography className={classes.typography} variant="h6" color="textPrimary">
                            {props.task.title}
                        </Typography>}
                    subheader={
                        <Typography className={daysLeft <= 0 ? classes.deadlineOverdue : classes.deadline}
                                    variant="body1" color="textSecondary">
                            {props.task.deadline !== null ? deadlineDisplay : ''} &nbsp; &nbsp;
                        </Typography>}
                />
            </Link>
        </CardActionArea>

    )
}

export default CardHead