import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import axios from "axios"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class TasksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    getAllTasks() {
        axios({
            method: 'GET',
            url: '/tasks'
        })
            .then(response => {
                this.setState({tasks: response.data.tasks})
            })
    }

    componentDidMount() {
        this.getAllTasks()
    }

    // For deleting individual tasks
    deleteTask(id) {
        if (window.confirm("Do you want to delete this task?")) {
            axios({
                method: 'DELETE',
                url: `/tasks/${id}`
            }).then( (response) => {
                this.getAllTasks() //id Update tasks state to update list
            })
        }
    }

    renderAllTasks() {
        return (
            <Col md={8}>
                {this.state.tasks.map(task => (

                    <Card key={task.id}>
                        <Card.Body>
                            <Link to={`/tasks/indiv/${task.id}`} key={task.id}>
                                <Card.Title>
                                    {task["title"]}
                                </Card.Title>
                            </Link>
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
                                {task["is_completed"]}
                            </Card.Text>
                            <Link to={`/tasks/indiv/${task.id}/edit`} key={task.id + 1}>
                                <Button>
                                    Edit Task
                                </Button>
                            </Link>
                            <Button onClick={() => this.deleteTask(task.id)}>Delete Task</Button>

                        </Card.Body>
                    </Card>
                ))}

            </Col>
        )
    }

    render() {
        return (
            <div>
                {this.renderAllTasks()}
            </div>
        )
    }

}

export default TasksList