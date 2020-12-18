import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class TasksList extends React.Component {

    renderAllTasks = () => {
        return(

        <Col md={8}>
            {this.props.tasks.map((task, index) => (
                <Card key={task.id}>
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
                            {task["is_completed"]}
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
        </Col>
    )}

    render() {
        return (
            <div>
                {this.renderAllTasks()}
            </div>
        )
    }

}


export default TasksList