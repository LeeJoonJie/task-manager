import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'
import TaskCard from "./home_page/task_card"
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'Center',
        marginTop: 100
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
        <Box className={classes.root}>
            <TaskCard task={task} index={null} actionAfterDelete={returnToHome}/>
        </Box>
    )

}

export default TaskView