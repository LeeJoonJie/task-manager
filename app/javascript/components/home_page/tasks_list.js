import React from "react"
import {Grid} from "@material-ui/core"
import TaskCard from "../task_card/task_card"

const layoutMap = new Map([
    ["List", 6],
    ["Grid 2/row", 6],
    ["Grid 3/row", 4],
    ["Grid 4/row", 3]
])

const TasksList = (props) => {

    const grid = () => {
        return (
            <Grid container direction="row" justify="flex-start" spacing={1}>
                {props.state.tasks.map((task, index) => (
                    <Grid item key={task.id} xs={layoutMap.get(props.state.layout)}>
                        <TaskCard key={task.id} task={task} index={index} actionAfterDelete={props.getAllTasks}/>
                    </Grid>))
                }
            </Grid>
        )
    }

    const list = () => {
        return (
            <div>
                {props.state.tasks.map((task, index) => (
                    <Grid container key={task.id} direction="row" justify="center" spacing={1}>
                        <Grid item key={task.id} xs={6}>
                            <TaskCard key={task.id} task={task} index={index} actionAfterDelete={props.getAllTasks}/>
                        </Grid>
                    </Grid>
                ))}
            </div>
        )
    }

    return (
        props.state.layout === "List"
            ? list()
            : grid()
    )
}

export default TasksList


