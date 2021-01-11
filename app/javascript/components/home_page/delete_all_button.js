import {DeleteForever} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import axios from "axios"
import React from "react"

const DeleteAllButton = (props) => {
    return (
        <div>
            <Button
                variant="outlined"
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
                Delete All
            </Button>
        </div>
    )

}

export default DeleteAllButton