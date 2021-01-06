import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

// Code adapted from https://material-ui.com/components/text-fields/?

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 30

    },
    searchBox: {
        padding: '2px 4px',
        width: 500,
        display: 'flex',
    },
    input: {
        marginLeft: theme.spacing(3),
        flex: 1,
    },
    menuButton: {
        marginTop: 7,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'flex-start',
    },
    fieldButton: {
        marginTop: 12,
        marginRight: 8,
        width: 95,
        alignItems: 'flex-start',
    },
    searchButton: {
        padding: 15,
    },
    divider: {
        paddingTop: 20,
        height: 30,
        margin: 4
    }
}))


const fieldValues = ['all', 'title', 'description', 'tags', 'deadline', 'priority']

const fieldMap = new Map([
    ['all', 'All'],
    ['title', 'Title'],
    ['description', 'Description'],
    ['tags', 'Tags'],
    ['deadline', 'Deadline'],
    ['priority', 'Priority']])


const SearchBar = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [searchString, setSearchString] = React.useState(props.state.searchString)

    const open = Boolean(anchorEl)

    const handleClickMenu = (event) => {
        setAnchorEl(event.target)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleSearchField = (event) => {
        setAnchorEl(null)
        props.setState({searchField: event.target.getAttribute("name")},
            props.getAllTasks)

    }

    return (
        <Box className={classes.root}>
            <Paper component="form" elevation={3} className={classes.searchBox}>
                <IconButton
                    className={classes.menuButton}
                    color="primary"
                    size="medium"
                    onClick={handleClickMenu}
                >
                    <MenuIcon/>
                </IconButton>
                <Button
                    className={classes.fieldButton}
                    color="primary"
                    size="medium"
                    onClick={handleClickMenu}

                >
                    {fieldMap.get(props.state.searchField)}
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClick={handleCloseMenu}
                    TransitionComponent={Fade}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    {fieldValues.map(value => (
                        <MenuItem
                            key={value}
                            name={value}
                            selected={props.state.searchField === value}
                            onClick={handleSearchField}
                        >
                            {fieldMap.get(value)}
                        </MenuItem>
                    ))}

                </Menu>
                <Divider className={classes.divider} orientation="vertical"/>

                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{"aria-label": "search"}}
                    onChange={(event) => setSearchString(event.target.value)}
                />
                <IconButton
                    type="submit"
                    className={classes.searchButton}
                    aria-label="search"
                    onClick={(event) => {
                        event.preventDefault()
                        props.setState({searchString: searchString}, props.getAllTasks)
                    }}
                >
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBar
