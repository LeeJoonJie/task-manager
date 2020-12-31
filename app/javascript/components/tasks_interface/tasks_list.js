import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom"
import moment from "moment"
import {WithContext as ReactTags} from "react-tag-input"
import {Button} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react"
import axios from "axios"

const TasksList = (props) => {

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
        <Col md={8}>
            {props.state.tasks.map(task => (
                <Card key={task.id}>
                    <Card.Body>
                        <Link to={`/tasks/indiv/${task.id}`} key={task.id}>
                            <Card.Title>
                                {task.title}
                            </Card.Title>
                        </Link>
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
                            {task.tags && <ReactTags tags={task.tags.map(value => ({id: value, text: value}))}
                                                     name="tags"
                                                     readOnly={true}
                            />}
                        </div>
                        <Button variant="contained"
                                color="secondary"
                                size="small"
                                startIcon={<DeleteIcon/>}
                                onClick={() => deleteTask(task.id)}
                        >
                            Delete Task
                        </Button>
                    </Card.Body>
                </Card>
            ))}

        </Col>
    )
}

export default TasksList