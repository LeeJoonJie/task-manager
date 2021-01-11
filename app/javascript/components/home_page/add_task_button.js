import {Button} from "@material-ui/core"
import {Add} from "@material-ui/icons"
import React from "react"
import {useHistory} from "react-router-dom"

const AddTaskButton = (props) => {
    const history = useHistory()
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                size="medium"
                type="add"
                startIcon={<Add/>}
                onClick={() => {
                    history.push('/new')
                }}
            >
                Add Task
            </Button>
        </div>
    )
}

export default AddTaskButton