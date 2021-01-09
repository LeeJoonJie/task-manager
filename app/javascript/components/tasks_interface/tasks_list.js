import React from "react"
import TaskCard from "./task_card"
import {Grid} from "@material-ui/core"

const arrangementMap = new Map([
    ["List", 6],
    ["Grid 2/row", 6],
    ["Grid 3/row", 4],
    ["Grid 4/row", 3]
])

const TasksList = (props) => {

    return (
        <Grid
            container
            direction={props.state.arrangement === "List" ? "column" : "row"}
            spacing={1}
            justify="space-around"
        >
            {props.state.tasks.map((task, index) => (
                <Grid
                    key={task.id}
                    item
                    xs={arrangementMap.get(props.state.arrangement)}
                >
                    <TaskCard key={task.id} task={task} index={index} actionAfterDelete={props.getAllTasks}/>
                </Grid>
            ))}

        </Grid>
    )
}

export default TasksList
