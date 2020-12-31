import React from 'react'
import TasksInterface from "./tasks_interface/tasks_interface";
import { Link } from 'react-router-dom'

class HomePage extends React.Component {


    render() {
        return (
            <div>
                <h1>Task Manager </h1>
                <Link to="/new">Add new task</Link>
                <TasksInterface/>
            </div>
        )
    }
}

export default HomePage

