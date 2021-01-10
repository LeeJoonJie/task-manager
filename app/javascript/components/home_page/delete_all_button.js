import {Button} from "@material-ui/core"
import {DeleteForever} from "@material-ui/icons"
import axios from "axios"
import React from "react"

const DeleteAllButton = (props) => {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                size="medium"
                type="delete"
                startIcon={<DeleteForever/>}
                onClick={() => {
                    if (window.confirm("Do you want to delete all tasks?")) {
                        axios({
                            method: 'DELETE',
                            url: `/tasks`
                        }).then((response) => {
                            props.getAllTasks()
                        })
                    }
                }}
            >
                Delete All Tasks
            </Button>
        </div>
    )

}

export default DeleteAllButton