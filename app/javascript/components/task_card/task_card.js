import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHead from "./card_head"
import CardTags from "./card_tags"
import CardDescription from "./card_description"
import CardProgress from "./card_progress"
import CardButtons from "./card_buttons"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
        minWidth: '50%'
    }
}))

// Code adapted from https://material-ui.com/components/cards/
const TaskCard = (props) => {

    const classes = useStyles()

    return (

        <Card className={classes.root} variant="outlined">
            <CardHead task={props.task} index={props.index}/>
            <CardTags task={props.task}/>
            <CardDescription task={props.task}/>
            <CardProgress task={props.task}/>
            <CardButtons task={props.task} actionAfterDelete={props.actionAfterDelete}/>
        </Card>
    )

}

export default TaskCard