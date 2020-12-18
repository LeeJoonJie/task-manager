import React from 'react'

class TasksList extends React.Component {

    renderAllTasks = () => {
        return(
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Deadline</th>
                    <th>Is completed</th>
                    <th colSpan="3"></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        {this.props.tasks.map((task, index) => (
                            <li key={index}>{task["title"]}</li>
                        ))}
                        </td>
                    <td>
                        {this.props.tasks.map((task, index) => (
                            <li key={index}>{task["description"]}</li>
                        ))}
                    </td>

                    <td>
                        {this.props.tasks.map((task, index) => (
                            <li key={index}>{task["priority"]}</li>
                        ))}
                    </td>

                    <td>
                        {this.props.tasks.map((task, index) => (
                            <li key={index}>{task["deadline"]}</li>
                        ))}
                    </td>

                    <td>
                        {this.props.tasks.map((task, index) => (
                            <li key={index}>{task["is_completed"] ? "Yes" : "No"}</li>
                        ))}
                    </td>
                </tr>
                </tbody>
            </table>
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


export default TasksList