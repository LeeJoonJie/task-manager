import React, {useEffect} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {ErrorMessage} from '@hookform/error-message';

function TaskForm(props) {

    // Check if form is being used for editing/creating task
    let is_editing = props.match.path === '/tasks/indiv/:id/edit'
    let {id} = is_editing ? useParams() : NaN

    // If form is being used for editing, set form values to existing task values
    useEffect(() => {
        if (!isNaN(id)) {
            axios({
                method: 'GET',
                url: `/tasks/${id}`,
                headers: {'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content}
            }).then(response => {
                const task = response.data
                setValue("title", task.title)
                setValue("description", task.description)
                setValue("priority", task.priority)
                setValue("deadline", task.deadline)
                setValue("is_completed", task.is_completed)
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
        console.log("SUBMIT")
        const method = is_editing ? 'PUT' : 'POST'
        const url = is_editing ? `/tasks/${id}` : '/tasks'
        axios({
            method: method,
            url: url,
            data: data,
            headers: {'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content}
        }).then(response => (console.log(response)))
    }

    return (
        <form className="TaskForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>TaskForm</h1>
            <label>Title:</label>
            <input name="title" ref={register({required: 'Enter a title'})}/>
            <ErrorMessage errors={errors} name="title"/>

            <label>Description</label>
            <textarea name="description" ref={register} rows="6"/>

            <label>Priority</label>
            <select name="priority" ref={register({
                required: 'Select a priority', pattern: {
                    value: /.+/,
                    message: 'Select a priority'
                }
            })}>
                <option value="">Select...</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
            </select>
            <ErrorMessage errors={errors} name="priority"/>

            <label>Deadline</label>
            <input
                type="date"
                name="deadline"
                ref={register({required: 'Select a deadline date'})}
            />
            <ErrorMessage errors={errors} name="deadline"/>

            <label>Completed</label>
            <input
                name="is_completed"
                type="checkbox"
                ref={register}
            />
            <div>
                <input disabled={isSubmitting} type="submit" />
            </div>
        </form>
    );
}

export default TaskForm