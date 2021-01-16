import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import React from "react"

const CardDescription = (props) => {

    return (
        <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
                {props.task.description}
            </Typography>
        </CardContent>
    )

}

export default CardDescription