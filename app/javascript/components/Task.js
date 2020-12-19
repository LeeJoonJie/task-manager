import React, {useEffect, useState} from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card'

import {useParams} from 'react-router-dom'

function Task(props) {
    const [task, setTask] = useState({})
    let { id } = useParams()

    useEffect(() => {
        axios({
            method: "GET",
            url: `/tasks/${id}`,
        }).then((response) => {
            setTask(response.data)
        })
    }, [id])
    console.log(task.title)
    return (

        <div>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {task["title"]}
                    </Card.Title>
                    <Card.Text>
                        {task["description"]}
                    </Card.Text>
                    <Card.Text>
                        {task["deadline"]}
                    </Card.Text>
                    <Card.Text>
                        {task["priority"]}
                    </Card.Text>
                    <Card.Text>
                        {task["is_completed"] ? "Yes" : "No"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Task