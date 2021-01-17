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
import Box from "@material-ui/core/Box"
import { useSnackbar } from 'notistack'
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        padding: 50,
        margin: 80,
        width: '50%'
    }
}))

const TaskForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [deadline, setDeadline] = useState(null)
    const [progress, setProgress] = useState(0)
    const [tags, setTags] = useState([])
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()

    let is_editing = props.match.path === '/tasks/indiv/:id/edit' // Check if editing or adding new task
    let {id} = is_editing ? useParams() : NaN
    let history = useHistory()

    // If form is being used for editing, set states to existing task values
    useEffect(() => {
        if (!isNaN(id)) {
            props.setTabValue(-1)
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
        } else {
            props.setTabValue(1)
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
        const message = is_editing ? 'Edited task' : 'Added new task'
        axios({
            method: method,
            url: url,
            data: data,
        }).then(response => {
            history.push(`/tasks/indiv/${response.data.id}`)
            enqueueSnackbar(message, {variant: 'success'} )
        })
    }

    function SubmitButton() {
        return (
            <Box textAlign='center' style={{margin: 20}}>
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    type="submit"
                    startIcon={is_editing ? <SaveIcon/> : <AddIcon/>}
                >
                    {is_editing ? "Save" : "Add"}
                </Button>
            </Box>
        )
    }

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} variant="outlined">
                <form className="TaskForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
        </Box>
    )
}

export default TaskForm