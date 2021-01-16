import {withStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import React from "react"
import Box from "@material-ui/core/Box"
import {LinearProgress} from "@material-ui/core"

// Code adapted from https://material-ui.com/components/progress/w
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress)


const CardProgress = (props) => {

    return (
        <CardContent>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={2}>
                    <BorderLinearProgress variant="determinate" value={props.task.progress}/>
                </Box>
                <Typography variant="body1" color="textPrimary">
                    {`${props.task.progress}%`}
                </Typography>
            </Box>
        </CardContent>
    )

}

export default CardProgress