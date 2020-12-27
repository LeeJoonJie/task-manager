import React from 'react'
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TaskView from './task_view'
import TaskForm from './task_form/task_form'
import axios from "axios";

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isViewing: true,
        }

        this.setState = this.setState.bind(this)

    }

    componentDidMount() {
        this.setState({isViewing: this.props.match.path === '/tasks/indiv/:id'})
    }

    EditButton() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="edit"
                    startIcon={<EditIcon/>}
                    onClick={() => {
                        this.setState({isViewing: false})
                    }}
                >
                    Edit
                </Button>
            </div>
        )
    }

    DeleteButton() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="delete"
                    startIcon={<DeleteIcon/>}
                    onClick={() => {
                        if (window.confirm("Do you want to delete this task?")) {
                            axios({
                                method: 'DELETE',
                                url: `/tasks/${this.props.match.params.id}`
                            }).then((response) => {
                                this.props.history.push('/')
                            })
                        }
                    }}
                >
                    Delete
                </Button>
            </div>
        )
    }

    render() {
        return (
            <div>

                {this.state.isViewing && this.EditButton()}

                {this.state.isViewing
                    ? <TaskView {...this.props} />
                    : <TaskForm {...this.props} setParentState={this.setState}/>}

                {this.DeleteButton()}
            </div>
        )
    }

}


export default Task