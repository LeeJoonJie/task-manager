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

// Code adapted from https://material-ui.com/components/text-fields/?

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(3),
        flex: 1,
    },
    iconButton: {
        padding: 15,
    },
    divider: {
        height: 28,
        margin: 4
    }
}));

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
        <Paper component="form" elevation={3} className={classes.root}>
            <IconButton
                className={classes.iconButton}
                aria-label="menu"
                onClick={handleClickMenu}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClick={handleCloseMenu}
                TransitionComponent={Fade}
            >
                <MenuItem
                    name="all"
                    selected={props.state.searchField === "all"}
                    onClick={handleSearchField}
                >
                    All
                </MenuItem>
                <MenuItem
                    name="title"
                    selected={props.state.searchField === "title"}
                    onClick={handleSearchField}
                >
                    Title
                </MenuItem>
                <MenuItem
                    name="description"
                    selected={props.state.searchField === "description"}
                    onClick={handleSearchField}
                >
                    Description
                </MenuItem>
                <MenuItem
                    name="tags"
                    selected={props.state.searchField === "tags"}
                    onClick={handleSearchField}
                >
                    Tags
                </MenuItem>
                <MenuItem
                    name="deadline"
                    selected={props.state.searchField === "deadline"}
                    onClick={handleSearchField}
                >
                    Deadline
                </MenuItem>
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
                className={classes.iconButton}
                aria-label="search"
                onClick={(event) => {
                    event.preventDefault()
                    props.setState({searchString: searchString}, props.getAllTasks)
                }}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar
