import React from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'

class NewTask extends React.Component {

    state = {
        title: null,
        description: null,
        priority: "Moderate",
        deadline: null,
        is_completed: false
    }

    componentDidMount() {
        passCsrfToken(document, axios)
    }

    handleChange = event => {
        console.log( event.target.value == "true")
        if (event.target.name == "is_completed") {
            this.setState({ [event.target.name]: event.target.value == "on"});
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const task = this.state

        axios
            .post('/tasks', task).then(response => {
            this.props.history.push('/');
            }).catch(e => {
                console.log(e)
        })

    }

    render() {

        return (

            <div>
                <h1>New Task</h1>
                <form onSubmit={e => this.handleSubmit(e)}>

                    <div>
                        <input
                            name="title"
                            onChange={this.handleChange}
                            placeholder="Title"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            name="description"
                            onChange={this.handleChange}
                            placeholder="Description"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            name="deadline"
                            onChange={this.handleChange}
                            type="date"
                        />
                    </div>

                    <div>
                        <select name="priority" onChange={this.handleChange} defaultValue="Moderate">
                            <option value="Low">Low</option>
                            <option value="Moderate" >Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div>
                        <input
                            name="is_completed"
                            onChange={this.handleChange}
                            type="checkbox"
                        />
                    </div>
                    <button type="submit">Create Task</button>
                </form>
            </div>
        )
    }
}

export default NewTask


