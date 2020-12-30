import React, {useEffect, useState} from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card'
import {useParams} from 'react-router-dom'
import moment from "moment";
import {WithContext as ReactTags} from "react-tag-input";

function TaskView(props) {
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

    return (

        <div>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {task.title}
                    </Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                    <Card.Text>
                        {task.deadline != null &&
                        moment(task.deadline.toString()).format('DD/MM/YYYY')}
                    </Card.Text>
                    <Card.Text>
                        {task.priority !== 'None' && task.priority}
                    </Card.Text>
                    <Card.Text>
                        {task.progress}
                    </Card.Text>
                    <div>
                        <ReactTags tags={task.tags.map(value => ({id: value, text: value}))}
                                   name="tags"
                                   readOnly={true}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )

}

export default TaskView