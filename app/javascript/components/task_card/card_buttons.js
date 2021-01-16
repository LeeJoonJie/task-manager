import {makeStyles} from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {CardActions} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    actions: {
        justifyContent: 'flex-end'
    }
}))

const CardButtons = (props) => {

    const classes = useStyles()
    const [deleteOpen, setDeleteOpen] = useState(false)
    const history = useHistory()

    // For deleting individual tasks
    const deleteTask = (id) => {
        axios({
            method: 'DELETE',
            url: `/tasks/${id}`
        }).then((response) => {
            setDeleteOpen(false)
            props.actionAfterDelete() //id Update tasks state to update list
        })
    }

    return (
        <CardActions disableSpacing className={classes.actions}>
            <Tooltip title="Edit">
                <IconButton onClick={() => history.push(`/tasks/indiv/${props.task.id}/edit`)}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={() => setDeleteOpen(true)}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            <Dialog
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
            >
                <DialogTitle>Delete Task?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Are you sure you want to delete ${props.task.title}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => deleteTask(props.task.id)} color="secondary" autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </CardActions>
    )
}

export default CardButtons