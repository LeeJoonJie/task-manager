import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
}))

const DeadlineDatePicker = ({deadline, setDeadline, setValue, register}) => {
    register({name: "deadline"}) // Manually register deadline DatePicker element
    const classes = useStyles()

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
                className={classes.root}
                autoOk
                name="deadline"
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                margin="dense"
                id="deadline"
                value={deadline}
                label="Deadline"
                onChange={date => {
                    setDeadline(date)
                    setValue("deadline", date)
                }}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>

    )
}

export default DeadlineDatePicker