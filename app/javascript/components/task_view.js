import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'
import TaskCard from "./task_card/task_card"
import {Grid} from "@material-ui/core"

const TaskView = (props) => {
    const [task, setTask] = useState(null)
    let {id} = useParams()
    let history = useHistory()

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
                <TaskCard task={task} index={null} scrollable={false} actionAfterDelete={returnToHome}/>
            </Grid>
        </Grid>
    )

}

export default TaskView