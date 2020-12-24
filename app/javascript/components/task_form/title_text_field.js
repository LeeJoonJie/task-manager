import {TextField} from "@material-ui/core";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";


const TitleTextField = ({ title, setTitle, errors, register }) => {
    
    return (
        <div>
            <div>
                <TextField
                    variant="outlined"
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
            <ErrorMessage errors={errors} name="title"/>
        </div>
    )

}

export default TitleTextField