import React, {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"
import {useParams, useHistory} from "react-router-dom"
import {Button} from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import ProgressSlider from "./progress_slider"
import TitleTextField from "./title_text_field"
import DescriptionTextField from "./description_text_field"
import PrioritySelect from "./priority_select"
import DeadlineDatePicker from "./deadline_date_picker"
import TagAdder from "./tag_adder"
import Paper from '@material-ui/core/Paper'
import {makeStyles} from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        margin: 30,
        width: '30%'

    },
}))

function TaskForm(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [deadline, setDeadline] = useState(null)
    const [progress, setProgress] = useState(0)
    const [tags, setTags] = useState([])
    const classes = useStyles()

    let is_editing = props.match.path === '/tasks/indiv/:id/edit' // Check if editing or adding new task
    let {id} = is_editing ? useParams() : NaN
    let history = useHistory()

    // If form is being used for editing, set states to existing task values
    useEffect(() => {
        if (!isNaN(id)) {
            axios({
                method: 'GET',
                url: `/tasks/${id}`,
            }).then(response => {
                const task = response.data
                setTitle(task.title)
                setDescription(task.description)
                setPriority(task.priority)
                setDeadline(task.deadline)
                setProgress(task.progress)
                setTags(task.tags)
            }).catch()
        }
    }, [id])


    const {
        register,
        setValue,
        handleSubmit,
        errors,
        formState: {isSubmitting}
    } = useForm()

    const onSubmit = data => {
        const method = is_editing ? 'PUT' : 'POST'
        const url = is_editing ? `/tasks/${id}` : '/tasks'
        console.log(data.priority)
        axios({
            method: method,
            url: url,
            data: data,
        }).then(response => {
            history.push(`/tasks/indiv/${response.data.id}`)
        })
    }

    function SubmitButton() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    type="submit"
                    startIcon={is_editing ? <SaveIcon/> : null}
                >
                    {is_editing ? "Save" : "Submit"}
                </Button>
            </div>
        )
    }

    return (
        <Paper className={classes.root} variant="outlined">
            <form className="TaskForm" onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <h1>{is_editing ? 'Edit Task' : 'Add Task'}</h1>
                    </Grid>

                    <Grid item>
                        {TitleTextField({
                            title: title, setTitle: setTitle,
                            errors: errors, register: register
                        })}
                    </Grid>

                    <Grid item>
                        {DescriptionTextField({
                            description: description, setDescription: setDescription,
                            register: register
                        })}
                    </Grid>

                    <Grid item>
                        {PrioritySelect({
                            priority: priority, setPriority: setPriority,
                            setValue: setValue, register: register
                        })}
                    </Grid>
                    <Grid item>
                        {DeadlineDatePicker({
                            deadline: deadline, setDeadline: setDeadline,
                            setValue: setValue, register: register()
                        })}
                    </Grid>
                    <Grid item>
                        {ProgressSlider({
                            progress: progress, setProgress: setProgress,
                            setValue: setValue, register: register
                        })}
                    </Grid>
                    <Grid item>
                        {TagAdder({
                            tags: tags, setTags: setTags,
                            setValue: setValue, register: register
                        })}
                    </Grid>
                    <Grid item>
                        {SubmitButton()}
                    </Grid>
                </Grid>

            </form>
        </Paper>
    )
}

export default TaskForm