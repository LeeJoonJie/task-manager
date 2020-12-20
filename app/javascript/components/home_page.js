import React from 'react'
import TasksList from "./tasks_list";
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>Task Manager </h1>
                <Link to="/new">Add new task</Link>
                <TasksList/>
            </div>
        )
    }
}

export default HomePage

