import {TextField} from "@material-ui/core";
import {ErrorMessage} from "@hookform/error-message"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        "& p": {
            color: 'red'
            }
    },
    textField: {
        width: '60%',
    },

}))

const TitleTextField = ({title, setTitle, errors, register}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <TextField
                    variant="outlined"
                    multiline={true}
                    rows={2}
                    className={classes.textField}
                    margin="dense"
                    inputRef={register({required: "Please provide a title"})}
                    id="title"
                    label="Title*"
                    name="title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    error={!!errors.title}
                />
            </div>

            <ErrorMessage errors={errors} name="title" as="p"/>
        </div>

    )

}

export default TitleTextField