import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

const DeadlineDatePicker = ({deadline, setDeadline, setValue, register}) => {
    register({name: "deadline"}) // Manually register deadline DatePicker element

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
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
        </div>
    )
}

export default DeadlineDatePicker