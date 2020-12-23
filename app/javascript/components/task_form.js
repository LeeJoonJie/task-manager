import React, {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"
import {useParams} from "react-router-dom"
import {ErrorMessage} from '@hookform/error-message'
import DateFnsUtils from '@date-io/date-fns'
import {Slider, Typography, Button, TextField, InputLabel, Select, MenuItem, FormControl} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'


function TaskForm(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [deadline, setDeadline] = useState(null)

    let is_editing = props.match.path === '/tasks/indiv/:id/edit'
    let {id} = is_editing ? useParams() : NaN

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
        axios({
            method: method,
            url: url,
            data: data,
        }).then(response => (console.log(response)))
    }

    function renderTitleField() {
        return (
            <div>
                <div>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        inputRef={register({required: "Please provide a title"})}
                        id="title"
                        label="Title*"
                        name="title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        error={!!errors.title}
                    />
                </div>
                <ErrorMessage errors={errors} name="title"/>
            </div>
        )
    }

    function renderDescriptionField() {
        return (
            <div>
                <TextField
                    variant="outlined"
                    margin="dense"
                    inputRef={register}
                    id="description"
                    label="Description"
                    name="description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    multiline
                    rows="10"
                    size="medium"
                />
            </div>
        )
    }

    function renderPriorityField() {
        register({name: "priority"}) // Manually register priority Select element

        return (
            <div>
                <FormControl style={{width: 150}}>
                    <InputLabel>&nbsp; &nbsp; Priority</InputLabel>
                    <Select
                        id="priority"
                        name="priority"
                        variant="outlined"
                        defaultValue=""
                        value={priority}
                        onChange={event => {
                            setPriority(event.target.value)
                            setValue("priority", event.target.value)
                        }}
                    >
                        <MenuItem value=""><em>none</em> </MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Moderate">Moderate</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }

    function renderDeadlineField() {
        register({name: "deadline"}) // Manually register deadline DatePicker element

        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        autoOk
                        name="deadline"
                        variant="inline"
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        margin="dense"
                        id="deadline"
                        value={deadline}
                        label="Deadline"
                        onChange={date => {
                            setDeadline(date)
                            setValue("deadline", date)
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }

    function renderProgressField() {

        // ProgressSlider code adapted from material-ui.com/components/slider/#range-slider
        const ProgressSlider = withStyles({
            root: {
                color: '#1976d2',
                height: 8,
            },
            thumb: {
                height: 24,
                width: 24,
                backgroundColor: '#fff',
                border: '2px solid currentColor',
                marginTop: -8,
                marginLeft: -12,
                '&:focus, &:hover, &$active': {
                    boxShadow: 'inherit',
                },
            },
            active: {},
            valueLabel: {
                left: 'calc(-50% + 4px)',
            },
            track: {
                height: 8,
                borderRadius: 4,
            },
            rail: {
                height: 8,
                borderRadius: 4,
            },
        })(Slider);

        return (
            <div>
                <FormControl style={{width: 300}}>
                    <Typography gutterBottom>Task Progress</Typography>
                    <ProgressSlider
                        name="progress"
                        valueLabelDisplay="auto"
                        defaultValue={0}
                        min={0}
                        max={100}/>
                </FormControl>
            </div>
        )
    }

    function renderSubmitButton() {
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
        <form className="TaskForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>TaskForm</h1>

            {renderTitleField()}

            {renderDescriptionField()}

            {renderPriorityField()}

            {renderDeadlineField()}

            {renderProgressField()}

            <input
                name="is_completed"
                type="checkbox"
                ref={register}
            />

            {renderSubmitButton()}

        </form>
    );
}

export default TaskForm