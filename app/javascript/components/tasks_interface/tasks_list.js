import Col from "react-bootstrap/Col"
import React from "react"
import TaskCard from "./task_card"

const TasksList = (props) => {


    return (
        <Col md={8}>
            {props.state.tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} getAllTasks={props.getAllTasks}/>
            ))}

        </Col>
    )
}

export default TasksList
