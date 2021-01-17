import {makeStyles, withStyles} from "@material-ui/core/styles"
import {FormControl, Paper, Slider, Typography} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        padding: 20,
        '&:hover': {
            borderColor: 'black'
        },
        '&:active, &:focus': {
            borderColor: 'mediumBlue',
            border: '2px solid'
        },
    },
    form: {
        width: '100%',
    },
}))

// Code adapted from material-ui.com/components/slider/#range-slider
const PrettoSlider = withStyles({
    root: {
        color: '#1976d2',
        height: 8,
        width: `100%`
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
})(Slider)

const ProgressSlider = ({ progress, setProgress, setValue, register }) => {

    register({name: "progress"}) // Manually register progress Slider element
    setValue("progress", progress)
    const classes = useStyles()

    return (
        <Paper variant="outlined" className={classes.root}>
            <FormControl className={classes.form}>
                <Typography gutterBottom color="textSecondary">Progress</Typography>
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
        </Paper>
    )
}

export default ProgressSlider