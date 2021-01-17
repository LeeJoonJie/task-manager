import React from "react"
import {Grid} from "@material-ui/core"
import TaskCard from "../task_card/task_card"
import {makeStyles} from "@material-ui/core/styles"

const layoutMap = new Map([
    ["List", 7],
    ["Grid 2/row", 6],
    ["Grid 3/row", 4],
    ["Grid 4/row", 3]
])

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 20,
        height: 320,
        display: 'grid',
        gridTemplateRows: '30% 23% 19% 14% 14%'
    },

}))

const TasksList = (props) => {
    const classes = useStyles()

    const grid = () => {
        return (
            <Grid container direction="row" justify="flex-start" spacing={1}>
                {props.state.tasks.map((task, index) => (
                    <Grid item key={task.id} xs={layoutMap.get(props.state.layout)}>
                        <TaskCard className={classes.card}
                                  key={task.id}
                                  task={task}
                                  index={index}
                                  actionAfterDelete={props.getAllTasks}/>
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
                        <Grid item key={task.id} xs={layoutMap.get(props.state.layout)}>
                            <TaskCard className={classes.card}
                                      key={task.id}
                                      task={task}
                                      index={index}
                                      actionAfterDelete={props.getAllTasks}/>
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


