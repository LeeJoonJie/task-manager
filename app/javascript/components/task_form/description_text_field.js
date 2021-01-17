import {TextField} from "@material-ui/core"
import React from "react"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%'
    },
}))

const DescriptionTextField = ({ description, setDescription, register }) => {
    const classes = useStyles()

    return (
            <TextField
                variant="outlined"
                margin="dense"
                className={classes.root}
                inputRef={register}
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                multiline
                rows="3"
                size="medium"
            />
    )
}

export default DescriptionTextField