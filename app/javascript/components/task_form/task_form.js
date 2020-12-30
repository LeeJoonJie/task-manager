import React, {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"
import {useParams, useHistory} from "react-router-dom"
import {Button} from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import ProgressSlider from "./progress_slider";
import TitleTextField from "./title_text_field";
import DescriptionTextField from "./description_text_field";
import PrioritySelect from "./priority_select";
import DeadlineDatePicker from "./deadline_date_picker";
import TagAdder from "./tag_adder"

function TaskForm(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("None")
    const [deadline, setDeadline] = useState(null)
    const [progress, setProgress] = useState(0)
    const [tags, setTags] = useState([])

    let is_editing = props.match.path === '/tasks/indiv/:id'
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

        axios({
            method: method,
            url: url,
            data: data,
        }).then(response => {
            if (is_editing) {
                props.setParentState({isViewing: true})
            } else {
                history.push(`/tasks/indiv/${response.data.id}`)
            }
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
        <form className="TaskForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>TaskForm</h1>

            {TitleTextField({
                title: title, setTitle: setTitle,
                errors: errors, register: register
            })}

            {DescriptionTextField({
                description: description, setDescription: setDescription,
                register: register
            })}

            {PrioritySelect({
                priority: priority, setPriority: setPriority,
                setValue: setValue, register: register
            })}

            {DeadlineDatePicker({
                deadline: deadline, setDeadline: setDeadline,
                setValue: setValue, register: register()
            })}

            {ProgressSlider({
                progress: progress, setProgress: setProgress,
                setValue: setValue, register: register
            })}

            {TagAdder({
                tags: tags, setTags: setTags,
                setValue: setValue, register:register
            })}

            {SubmitButton()}

        </form>
    );
}

export default TaskForm