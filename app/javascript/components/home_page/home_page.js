import React from 'react'
import axios from "axios"
import SearchBar from "./search_bar"
import SortOptions from "./sort_options"
import TasksList from "./tasks_list"
import DeleteAllButton from "./delete_all_button"
import Grid from "@material-ui/core/Grid"
import LayoutOptions from "./layout_options"
import Typography from "@material-ui/core/Typography"
import AddTaskButton from "./add_task_button"
import {Paper} from "@material-ui/core"
import Box from "@material-ui/core/Box";

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            sortOrder: "desc",
            sortField: "created_at",
            searchString: "",
            searchField: "all",
            layout: "List",
        }
        this.setState = this.setState.bind(this)
        this.getAllTasks = this.getAllTasks.bind(this)
    }

    getAllTasks() {
        axios({
            // PUT method used because data cant be sent through GET method to the rails controller
            method: 'PUT',
            url: '/tasks',
            data: {
                sortField: this.state.sortField, sortOrder: this.state.sortOrder,
                searchString: this.state.searchString, searchField: this.state.searchField
            },
        }).then(response => {
            this.setState({tasks: response.data.tasks})
        })
    }

    componentDidMount() {
        this.getAllTasks()
        this.props.setTabValue(0)
    }

    render() {
        return (
            <div>
                <Box display="flex" justifyContent="center">
                    <SearchBar state={this.state} setState={this.setState} getAllTasks={this.getAllTasks}/>
                </Box>

                <Grid container style={{margin: "30px 40px 20px 20px", padding: 0}} spacing={1} alignItems="flex-end" >
                    <Grid item>
                        <Typography variant='h5'>{`Found ${this.state.tasks.length} task(s)`}</Typography>
                    </Grid>

                    <Grid item>
                        <SortOptions state={this.state} setState={this.setState} getAllTasks={this.getAllTasks}/>
                    </Grid>
                    <Grid item>
                        <LayoutOptions state={this.state} setState={this.setState} getAllTasks={this.getAllTasks}/>
                    </Grid>

                    <Grid item style={{flexGrow: 1}}>
                    </Grid>
                    <Grid item>
                        <AddTaskButton/>
                    </Grid>
                    <Grid item>
                        <DeleteAllButton getAllTasks={this.getAllTasks}/>
                    </Grid>
                </Grid>
                <Paper variant="outlined" style={{padding: "25px 10px", minHeight: "50vh"}}>
                    <TasksList state={this.state} getAllTasks={this.getAllTasks}/>
                </Paper>

            </div>
        )
    }

}

export default HomePage