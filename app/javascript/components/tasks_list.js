import React from 'react'
import axios from 'axios'

class Tasks_list extends React.Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        axios
            .get('/tasks')
            .then(response => {
                this.setState({ posts: response.data.tasks });
            })
    }

    renderAllTasks = () => {
        return(
            <ul>
                {this.state.posts.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderAllTasks()}
            </div>
        )
    }
}

export default Tasks_list