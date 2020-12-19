import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom";

class TasksList extends React.Component {

    renderAllTasks = () => {
        return (

            <Col md={8}>
                {this.props.tasks.map(task => (

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
                                <Card.Title>
                                    Edit Task
                                </Card.Title>
                            </Link>

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