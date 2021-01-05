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
import {spacing} from '@material-ui/system'

// Code adapted from https://material-ui.com/components/button-group/

const fieldValues = ['created_at', 'updated_at', 'deadline', 'priority', 'progress']
const fieldMap = new Map([
    ['created_at', 'Created At'],
    ['updated_at', 'Last Edit'],
    ['deadline', 'Deadline'],
    ['priority', 'Priority'],
    ['progress', 'Progress']])


const SortOptions = (props) => {

    const [fieldOpen, setFieldOpen] = React.useState(false)
    const anchorRef = React.useRef(null)

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
        <Box my={15}>
            <Col md={8}>
                <FormLabel>Sort by</FormLabel>
                <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="split button"
                >
                    <Button
                        color="primary"
                        size="large"
                        startIcon={<Menu/>}
                        onClick={handleFieldToggle}
                    >
                        {fieldMap.get(props.state.sortField)}
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
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