import {TextField} from "@material-ui/core";
import React from "react";

const DescriptionTextField = ({ description, setDescription, register }) => {

    return (
        <div>
            <TextField
                variant="outlined"
                margin="dense"
                inputRef={register}
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                multiline
                rows="10"
                size="medium"
            />
        </div>
    )
}

export default DescriptionTextField