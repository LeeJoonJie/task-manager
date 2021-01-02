import React from 'react'
import axios from "axios"
import SearchBar from "./search_bar"
import SortOptions from "./sort_options"
import TasksList from "./tasks_list"
import DeleteAllButton from "./delete_all_button"

class TasksInterface extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            sortOrder: "desc",
            sortField: "created_at",
            searchString: "",
            searchField: "all"
        }
        this.setState = this.setState.bind(this)
        this.getAllTasks = this.getAllTasks.bind(this)
    }

    getAllTasks() {
        axios({
            // PUT method used as data cant be sent through GET method to the rails controller
            method: 'PUT',
            url: '/tasks',
            data: {sortField: this.state.sortField, sortOrder: this.state.sortOrder,
            searchString: this.state.searchString, searchField: this.state.searchField},
        }).then(response => {
            this.setState({tasks: response.data.tasks})
        })
    }

    componentDidMount() {
        this.getAllTasks()
    }

    render() {
        return (
            <div>
                <DeleteAllButton getAllTasks={this.getAllTasks} />
                <SearchBar state={this.state} setState={this.setState} getAllTasks={this.getAllTasks} />
                <SortOptions state={this.state} setState={this.setState} getAllTasks={this.getAllTasks} />
                <TasksList state={this.state} getAllTasks={this.getAllTasks}/>
            </div>
        )
    }

}

export default TasksInterface