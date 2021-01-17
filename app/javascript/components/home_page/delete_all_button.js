import {DeleteForever} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import axios from "axios"
import React, {useState} from "react"
import Tooltip from "@material-ui/core/Tooltip"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import {useSnackbar} from 'notistack'

const DeleteAllButton = (props) => {

    const [deleteAllOpen, setDeleteAllOpen] = useState(false)
    const {enqueueSnackbar} = useSnackbar()

    const handleDelete = () => {
        axios({method: 'DELETE', url: `/tasks`})
            .then((response) => {
                setDeleteAllOpen(false)
                props.getAllTasks()
                enqueueSnackbar('Deleted all tasks', {variant: 'success'})
            })
    }

    return (
        <div>
            <Tooltip title="Delete All Tasks">
                <Button
                    style={{margin: "0px 20px"}}
                    variant="outlined"
                    color="secondary"
                    size="medium"
                    type="delete"
                    startIcon={<DeleteForever/>}
                    onClick={() => setDeleteAllOpen(true)}
                >
                    Delete All
                </Button>
            </Tooltip>
            <Dialog
                open={deleteAllOpen}
                onClose={() => setDeleteAllOpen(false)}
            >
                <DialogTitle>Delete All Tasks?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Are you sure you want to delete all tasks? This action cannot be undone.`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteAllOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="secondary" autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default DeleteAllButton