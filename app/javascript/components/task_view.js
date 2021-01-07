import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'
import TaskCard from "./tasks_interface/task_card"

function TaskView(props) {
    const [task, setTask] = useState(null)
    let {id} = useParams()
    let history = useHistory()

    useEffect(() => {
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
        task && <TaskCard task={task} index={null} actionAfterDelete={returnToHome}/>
    )

}

export default TaskView