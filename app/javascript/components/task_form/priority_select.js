import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%'
    },
}))

const PrioritySelect = ({priority, setPriority, setValue, register}) => {

    register({name: "priority"}) // Manually register priority Select element
    setValue("priority", priority === "" ? "None" : priority)
    const classes = useStyles()

    return (

        <FormControl className={classes.root}>
            <InputLabel>&nbsp; &nbsp; Priority</InputLabel>
            <Select
                name="priority"
                variant="outlined"
                value={priority}
                onChange={event => {
                    setPriority(event.target.value)
                    setValue("priority", event.target.value)
                }}
            >
                <MenuItem value="">&nbsp; &nbsp;</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Moderate">Moderate</MenuItem>
                <MenuItem value="High">High</MenuItem>
            </Select>
        </FormControl>

    )
}

export default PrioritySelect