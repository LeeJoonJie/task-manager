import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";

const PrioritySelect = ({priority, setPriority, setValue, register}) => {

    register({name: "priority"}) // Manually register priority Select element

    return (
        <div>
            <FormControl style={{width: 150}}>
                <InputLabel>&nbsp; &nbsp; Priority</InputLabel>
                <Select
                    id="priority"
                    name="priority"
                    variant="outlined"
                    defaultValue=""
                    value={priority}
                    onChange={event => {
                        setPriority(event.target.value)
                        setValue("priority", event.target.value)
                    }}
                >
                    <MenuItem value=""><em>none</em> </MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Moderate">Moderate</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default PrioritySelect