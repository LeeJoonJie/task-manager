import {withStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import React from "react"
import Box from "@material-ui/core/Box"
import {Slider} from "@material-ui/core"

// Code adapted from material-ui.com/components/slider/#range-slider
const PrettoSlider = (progress) => {
    return withStyles({
        root: {
            color:
                progress === 100 ? '#7dcc30'
                    : progress === 0 ? 'red'
                    : '#1976d2',
            height: 10,
            width: `80%`,
            borderRadius: 5,
            margin: '0px 20px'
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:hover, &:focus': {
                boxShadow: 'none'
            }
        },
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
            color: 'grey'
        },
    })(Slider)
}


const CardProgress = (props) => {

    const CustomSlider = PrettoSlider(props.task.progress)

    return (
        <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center">
                <CustomSlider
                    name="progress"
                    value={props.task.progress}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}/>
                <Typography variant="body1" color="textPrimary">
                    {`${props.task.progress}%`}
                </Typography>
            </Box>
        </CardContent>
    )

}

export default CardProgress