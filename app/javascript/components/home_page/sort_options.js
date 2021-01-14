import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import MenuItem from "@material-ui/core/MenuItem"
import {TrendingDown, TrendingUp} from "@material-ui/icons"
import Box from "@material-ui/core/Box"
import FormLabel from '@material-ui/core/FormLabel'
import Col from "react-bootstrap/Col"
import {makeStyles} from "@material-ui/core/styles"
import Fade from "@material-ui/core/Fade"
import Menu from "@material-ui/core/Menu"

// Code adapted from https://material-ui.com/components/button-group/

const useStyles = makeStyles((theme) => ({

    buttons: {
        margin: '2px 10px 10px 10px',
        height: 40
    },
    label: {
        margin: '7px 7px 7px 10px',
        color: 'black'
    },
    fieldButton: {
        margin: 0,
        width: 140,
        padding: 0,
        leftMargin: 0,
    },
    orderButtonDesc: {
        margin: 0,
        width: 90,
        background: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)'
    },
    orderButtonAsc: {
        margin: 0,
        width: 90,
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

    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useStyles()
    const open = Boolean(anchorEl)

    const handleOrderChange = (event) => {
        props.setState(
            {sortOrder: props.state.sortOrder === "desc" ? "asc" : "desc"},
            props.getAllTasks)
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.target)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleSortField = (event) => {
        setAnchorEl(null)
        props.setState({sortField: event.target.getAttribute("name")},
            props.getAllTasks)
    }

    return (
        <Box>
            <Col md={8}>
                <FormLabel className={classes.label}>Sort by</FormLabel>
                <ButtonGroup
                    variant="contained"
                    aria-label="split button"
                    className={classes.buttons}
                >
                    <Button
                        size="large"
                        onClick={handleOpenMenu}
                        className={classes.fieldButton}
                        color="primary"
                        variant="contained"
                    >
                        {fieldMap.get(props.state.sortField)}
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
                        {fieldValues.map(value => (
                            <MenuItem
                                key={value}
                                name={value}
                                selected={props.state.sortField === value}
                                onClick={handleSortField}
                            >
                                {fieldMap.get(value)}
                            </MenuItem>
                        ))}

                    </Menu>

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
            </Col>
        </Box>
    )
}

export default SortOptions