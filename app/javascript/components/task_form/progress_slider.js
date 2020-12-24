import {withStyles} from "@material-ui/core/styles";
import {FormControl, Slider, Typography} from "@material-ui/core";
import React from "react";

// Code adapted from material-ui.com/components/slider/#range-slider
const PrettoSlider = withStyles({
    root: {
        color: '#1976d2',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const ProgressSlider = ({ progress, setProgress, setValue, register }) => {

    register({name: "progress"}) // Manually register progress Slider element

    return (
        <div>
            <FormControl style={{width: 300}}>
                <Typography gutterBottom>Task Progress</Typography>
                <PrettoSlider
                    name="progress"
                    valueLabelDisplay="auto"
                    value={progress}
                    onChange={ (event, value) => {
                        setProgress(value)
                        setValue("progress", value)
                    }}
                    min={0}
                    max={100}/>
            </FormControl>
        </div>
    )
}

export default ProgressSlider