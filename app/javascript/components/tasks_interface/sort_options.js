import React from "react"

const SortOptions = (props) => {

    const handleOrderChange = (event) => {
        props.setState(
            {sortOrder: event.target.value},
            () => props.getAllTasks())
    }

    const handleFieldChange = (event) => {
        props.setState(
            {sortField: event.target.value},
            () => props.getAllTasks())
    }

    return (
        <div>
            <form>
                <label>Sort by:</label>
                <select name="field" onChange={handleFieldChange}>
                    <option value="created_at">Date of creation</option>
                    <option value="updated_at">Latest Edit</option>
                    <option value="priority">Priority</option>
                    <option value="deadline">Deadline</option>
                    <option value="progress">Progress</option>

                </select>

                <label>Order:</label>
                <label>
                    <input type="radio" value="desc"
                           checked={props.state.sortOrder === "desc"}
                           onChange={handleOrderChange}
                    />
                    Descending
                </label>
                <label>
                    <input type="radio" value="asc"
                           checked={props.state.sortOrder === "asc"}
                           onChange={handleOrderChange}
                    />
                    Ascending
                </label>

            </form>
        </div>

    )
}

export default SortOptions