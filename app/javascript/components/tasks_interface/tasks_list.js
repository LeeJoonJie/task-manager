import React from "react"
import TaskCard from "./task_card"
import {Grid} from "@material-ui/core"

const layoutMap = new Map([
    ["List", 6],
    ["Grid 2/row", 6],
    ["Grid 3/row", 4],
    ["Grid 4/row", 3]
])

const TasksList = (props) => {

    return (
        <Grid
            container
            direction={props.state.layout=== "List" ? "column" : "row"}
            spacing={1}
            justify="flex-start]"
        >
            {props.state.tasks.map((task, index) => (
                <Grid
                    key={task.id}
                    item
                    xs={layoutMap.get(props.state.layout)}

                >
                    <TaskCard key={task.id} task={task} index={index} actionAfterDelete={props.getAllTasks}/>
                </Grid>
            ))}

        </Grid>
    )
}

export default TasksList
