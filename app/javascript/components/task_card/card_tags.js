import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import CardContent from "@material-ui/core/CardContent"
import React from "react"

const useStyles = makeStyles((theme) => ({

    root: {
        overflow: 'auto',
        padding: '2px 16px 0px 16px'
    },
    tags: {
        "&:disabled": {
            backgroundColor: 'lightGrey',
            color: 'black'
        }
    }
}))

const CardTags = (props) => {

    const classes = useStyles()
    return (
        <CardContent className={props.tagsClassName ?? classes.root}>
            <Grid container spacing={1}>
                {props.task.tags.map(tag => (
                    <Grid item key={tag}>
                        <Button
                            disabled
                            key={tag}
                            className={classes.tags}
                            size="small"
                            variant="contained"
                        >
                            {tag}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </CardContent>
    )

}

export default CardTags