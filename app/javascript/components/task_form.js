import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

function TaskForm() {

    const {
        register,
        handleSubmit,
        errors,
        formState: {isSubmitting}
    } = useForm();

    const onSubmit = data => {
        console.log("hello")
        console.log(data)
        axios( {
            method: "POST",
            url: '/tasks',
            data: data,
            headers: {'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content}
        })
    }

    return (
        <form className="TaskForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>TaskForm</h1>
            <label>Title:</label>
            <input name="title" ref={register({required: true})}/>
            <p>{(errors.title) ? "Title is required" : ""}</p>

            <label>Description</label>
            <textarea name="description" ref={register} rows="6"/>

            <label>Priority</label>
            <select name="priority" ref={register({required: true, pattern: /.*/})}>
                <option value="">Select...</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
            </select>
            <p>{(errors.priority) ? "Priority is required" : ""}</p>

            <label>Deadline</label>
            <input
                type="date"
                name="deadline"
                ref={register({required: true})}
            />
            <p>{(errors.deadline) ? "Deadline is required" : ""}</p>

            <label>Completed</label>
            <input
                name="is_completed"
                type="checkbox"
                ref={register({required: true})}
            />
            <div>
                <input disabled={isSubmitting} type="submit"/>
            </div>
        </form>
    );
}

export default TaskForm