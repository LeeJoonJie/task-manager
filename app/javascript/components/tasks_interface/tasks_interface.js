import React from 'react'
import axios from "axios"
import SearchBar from "./search_bar"
import SortOptions from "./sort_options"
import TasksList from "./tasks_list"
import DeleteAllButton from "./delete_all_button"
import Grid from "@material-ui/core/Grid"

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
            // PUT method used because data cant be sent through GET method to the rails controller
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
                <Grid container spacing={5}>
                    <Grid item>
                        <SortOptions state={this.state} setState={this.setState} getAllTasks={this.getAllTasks} />
                    </Grid>
                    <Grid item>
                        <SearchBar state={this.state} setState={this.setState} getAllTasks={this.getAllTasks} />
                    </Grid>
                </Grid>
                <TasksList state={this.state} getAllTasks={this.getAllTasks}/>
            </div>
        )
    }

}

export default TasksInterface