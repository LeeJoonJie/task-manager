import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import axios from "axios"
import moment from 'moment';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class TasksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            sortOrder: "desc",
            sortField: "created_at"
        }
    }

    getAllTasks() {
        axios({
            // PUT method used as data cant be sent through GET method to the rails controller
            method: 'PUT',
            url: '/tasks',
            data: {sortField: this.state.sortField, sortOrder: this.state.sortOrder},
        }).then(response => {
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
            }).then((response) => {
                this.getAllTasks() //id Update tasks state to update list
            })
        }
    }

    handleOrderChange = (event) => {
        this.setState(
            {sortOrder: event.target.value},
            () => this.getAllTasks())
    }

    handleFieldChange = (event) => {
        this.setState(
            {sortField: event.target.value},
            () => this.getAllTasks())
    }

    renderSortTasksOptions() {
        return (
            <div>
                <form>
                    <label>Sort by:</label>
                    <select name="field" onChange={this.handleFieldChange}>
                        <option value="created_at">Date of creation</option>
                        <option value="updated_at">Latest Edit</option>
                        <option value="priority">Priority</option>
                        <option value="deadline">Deadline</option>
                        <option value="progress">Progress</option>

                    </select>

                    <label>Order:</label>
                    <label>
                        <input type="radio" value="desc"
                               checked={this.state.sortOrder === "desc"}
                               onChange={this.handleOrderChange}
                        />
                        Descending
                    </label>
                    <label>
                        <input type="radio" value="asc"
                               checked={this.state.sortOrder === "asc"}
                               onChange={this.handleOrderChange}
                        />
                        Ascending
                    </label>

                </form>
            </div>

        )
    }

    renderAllTasks() {
        return (
            <Col md={8}>
                {this.state.tasks.map(task => (
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
                {this.renderSortTasksOptions()}
                {this.renderAllTasks()}
            </div>
        )
    }

}

export default TasksList