import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'
import TaskCard from "./task_card/task_card"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    tags: {
        padding: '4px 16px 0px 16px'
    }
}))

const TaskView = (props) => {
    const [task, setTask] = useState(null)
    let {id} = useParams()
    let history = useHistory()
    const classes = useStyles()

    useEffect(() => {
        props.setTabValue(-1)
        axios({
            method: "GET",
            url: `/tasks/${id}`,
        }).then((response) => {
            setTask(response.data)
        })
    }, [id])

    const returnToHome = () => {
        history.push('/')
    }

    return (
        task &&
        <Grid container direction="row" justify="center">
            <Grid item xs={8}>
                <TaskCard task={task} tagsClassName={classes.tags} index={null} scrollable={false}
                          actionAfterDelete={returnToHome}/>
            </Grid>
        </Grid>
    )

}

export default TaskView