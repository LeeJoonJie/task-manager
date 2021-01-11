import React from "react"
import Box from "@material-ui/core/Box"
import Col from "react-bootstrap/Col"
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import {makeStyles} from "@material-ui/core/styles";

const optionValues = ['List', 'Grid 2/row', 'Grid 3/row', 'Grid 4/row']

const useStyles = makeStyles((theme) => ({

    button: {
        margin: '2px 10px 10px 10px',
        height: 40
    },
    label: {
        margin: '7px 7px 9px 7px',
        color: 'black'
    },
    optionButton: {
        width: 180,
        leftMargin: 0,
        background: 'linear-gradient(45deg, #f8b500 30%, #fceabb 90%)'
    },
}))

const LayoutOptions = (props) => {

    const [optionsOpen, setOptionsOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const classes = useStyles()

    const handleOptionChange = (event, index) => {
        setOptionsOpen(false)
        props.setState(
            {layout: optionValues[index]},
            props.getAllTasks)
    }

    const handleOptionToggle = () => {
        setOptionsOpen((prevOpen) => !prevOpen);
    }

    const handleOptionClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOptionsOpen(false);
    }

    return (
        <Box>
            <Col md={8}>
                <FormLabel className={classes.label}>Layout</FormLabel>
                <Button
                    className={classes.button}
                    ref={anchorRef}
                    size="large"
                    startIcon={<MenuIcon/>}
                    onClick={handleOptionToggle}
                    className={classes.optionButton}
                >
                    {props.state.layout}
                </Button>
                <Popper
                    open={optionsOpen}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    placement="bottom-start"
                    modifiers={{
                        offset: {
                            enabled: true,
                            offset: 35
                        }
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleOptionClose}>
                            <MenuList id="split-button-menu">
                                {optionValues.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        selected={option === props.state.layout}
                                        onClick={(event) => handleOptionChange(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>

                </Popper>
            </Col>
        </Box>
    )

}

export default LayoutOptions