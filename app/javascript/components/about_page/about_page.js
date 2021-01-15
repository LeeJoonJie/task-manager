import React, {useEffect} from "react"
import Card from "@material-ui/core/Card"
import {makeStyles} from "@material-ui/core/styles"
import {CardActions, CardHeader} from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import DescriptionIcon from "@material-ui/icons/Description"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import CardContent from "@material-ui/core/CardContent"
import InstructionTable from "./instruction_table"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '80px 0px'
    },
    card: {
        width: '80%'
    },
    avatar: {
        margin: '0px 30px 0px 0px',
        color: 'orange',
        fontSize: `4rem`
    },
    button: {

    }

}))

const AboutPage = (props) => {
    const classes = useStyles()

    useEffect(() => {
        props.setTabValue(2)
    }, [])

    // Code reused from
    // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Box className={classes.root}>
            <Card className={classes.card} variant="outlined">
                <CardHeader
                    avatar={<InfoIcon className={classes.avatar}/>}
                    title={
                        <Typography variant="h4" color="textPrimary">
                            About Task Manager
                        </Typography>}
                />
                <CardContent>
                    <Typography variant="h6" color="textPrimary">
                        Task Manager is a tool built help you manage and keep track of tasks.
                        With Task Manager you can set deadlines, monitor progress, add tags,
                        search for tasks and much more!
                    </Typography>
                </CardContent>
                <CardContent>
                    <InstructionTable/>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" color="textPrimary">
                        For more detailed information and examples, visit our User Guide!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => openInNewTab(
                            "https://breadpeanutbutter.github.io/task-manager/UserGuide.html")}
                        className={classes.button}
                        size="large"
                        color="primary"
                        startIcon={<DescriptionIcon/>}
                    >
                        User Guide
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default AboutPage