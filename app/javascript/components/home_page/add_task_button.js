import {Button} from "@material-ui/core"
import {Add} from "@material-ui/icons"
import React from "react"
import {useHistory} from "react-router-dom"
import Tooltip from "@material-ui/core/Tooltip"

const AddTaskButton = (props) => {
    const history = useHistory()
    return (
        <div>
            <Tooltip title="Add Task">
                <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    type="add"
                    startIcon={<Add/>}
                    onClick={() => {
                        history.push('/new')
                    }}
                >
                    Add Task
                </Button>
            </Tooltip>
        </div>
    )
}

export default AddTaskButton