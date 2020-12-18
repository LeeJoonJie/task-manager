import React from 'react'
import TasksList from "./tasks_list";
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/tasks'
        })
            .then(response => {
                this.setState({tasks: response.data.tasks})
            })
    }

    render() {
        return (
            <div>
                <h1>Task Manager </h1>
                <Link to="/new">Add new task</Link>
                <TasksList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default HomePage

