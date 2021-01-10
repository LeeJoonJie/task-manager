import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import {TrendingDown, TrendingUp, Menu} from "@material-ui/icons"
import Box from "@material-ui/core/Box"
import FormLabel from '@material-ui/core/FormLabel'
import Col from "react-bootstrap/Col"
import {makeStyles} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

// Code adapted from https://material-ui.com/components/button-group/

const useStyles = makeStyles((theme) => ({

    buttons: {
        margin: 5,
        height: 40
    },
    label: {
        margin: 7,
        color: 'black'
    },
    fieldButton: {
        width: 180,
        leftMargin: 0,
        background: 'linear-gradient(45deg, #21a9f3 30%, #21CBF3 90%)'
    },
    orderButtonDesc: {
        background: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)'
    },
    orderButtonAsc: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
}))

const fieldValues = ['created_at', 'deadline', 'priority', 'progress']
const fieldMap = new Map([
    ['created_at', 'Created At'],
    ['deadline', 'Deadline'],
    ['priority', 'Priority'],
    ['progress', 'Progress']])


const SortOptions = (props) => {

    const [fieldOpen, setFieldOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const classes = useStyles()

    const handleOrderChange = (event) => {
        props.setState(
            {sortOrder: props.state.sortOrder === "desc" ? "asc" : "desc"},
            props.getAllTasks)
    }

    const handleFieldChange = (event, index) => {
        setFieldOpen(false)
        props.setState(
            {sortField: fieldValues[index]},
            props.getAllTasks)
    }

    const handleFieldToggle = () => {
        setFieldOpen((prevOpen) => !prevOpen);
    }

    const handleFieldClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setFieldOpen(false);
    }

    return (
        <Box>
            <Col md={8}>
                <FormLabel className={classes.label}>Sort by</FormLabel>
                <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                    className={classes.buttons}
                >
                    <Button
                        size="large"
                        startIcon={<MenuIcon/>}
                        onClick={handleFieldToggle}
                        className={classes.fieldButton}
                    >
                        {fieldMap.get(props.state.sortField)}
                    </Button>
                    <Button
                        className={props.state.sortOrder === "desc"
                            ? classes.orderButtonDesc
                            : classes.orderButtonAsc}
                        variant="contained"
                        size="large"
                        startIcon={props.state.sortOrder === "desc" ? <TrendingDown/> : <TrendingUp/>}
                        onClick={handleOrderChange}
                    >
                        {props.state.sortOrder === "desc" ? "Desc" : "Asc"}
                    </Button>
                </ButtonGroup>
                <Popper
                    open={fieldOpen}
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
                        <ClickAwayListener onClickAway={handleFieldClose}>
                            <MenuList id="split-button-menu">
                                {fieldValues.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        selected={option === props.state.sortField}
                                        onClick={(event) => handleFieldChange(event, index)}
                                    >
                                        {fieldMap.get(option)}
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

export default SortOptions