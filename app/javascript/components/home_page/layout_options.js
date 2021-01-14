import React from "react"
import Box from "@material-ui/core/Box"
import Col from "react-bootstrap/Col"
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import {makeStyles} from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import Fade from "@material-ui/core/Fade"

const optionValues = ['List', 'Grid 2/row', 'Grid 3/row', 'Grid 4/row']

const useStyles = makeStyles((theme) => ({

    button: {
        margin: '1px 10px 10px 10px',
        height: 40,
        width: 150
    },
    label: {
        margin: '7px 7px 8px 10px',
        color: 'black'
    },
}))

const LayoutOptions = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const classes = useStyles()

    const handleOpenMenu = (event) => {
        setAnchorEl(event.target)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleLayoutChange = (event) => {
        setAnchorEl(null)
        props.setState({layout: event.target.getAttribute("name")},
            props.getAllTasks)

    }

    return (
        <Box>
            <Col md={8}>
                <FormLabel className={classes.label}>Layout</FormLabel>
                <Button
                    variant="contained"
                    className={classes.button}
                    size="large"
                    color="primary"
                    onClick={handleOpenMenu}
                >
                    {props.state.layout}
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClick={handleCloseMenu}
                    TransitionComponent={Fade}
                    getContentAnchorEl={null}
                    anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                    transformOrigin={{vertical: "top", horizontal: "center"}}
                >
                    {optionValues.map(value => (
                        <MenuItem
                            key={value}
                            name={value}
                            selected={props.state.layout === value}
                            onClick={handleLayoutChange}
                        >
                            {value}
                        </MenuItem>
                    ))}

                </Menu>

            </Col>
        </Box>
    )

}

export default LayoutOptions