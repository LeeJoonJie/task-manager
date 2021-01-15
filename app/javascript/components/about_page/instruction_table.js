import React from 'react'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import FormLabel from "@material-ui/core/FormLabel"

// Code adapted from https://material-ui.com/components/tables/

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#25282c',
        color: 'orange',
        fontSize: 18,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(action, instruction) {
    return {action, instruction};
}

const rows = [
    createData('View tasks',
        'Click the \'Home\' tab in the website header to view tasks in the Homepage.'),
    createData('Add new task',
        'Click the \'Add Task\' tab in the website header or the \'Add Task\' button in the Homepage.'),
    createData('Delete a task',
        'Click the \'Delete\' icon at the bottom right of the task card.'),
    createData('Edit a task',
        'Click the \'Edit\' icon at the bottom right of the task card.'),
    createData('Delete all tasks',
        'Click the \'Delete all\' button in the Homepage.'),
    createData('Sort tasks',
        'Click the \'Sort\' button in the Homepage.'),
    createData('Search tasks',
        'Use the search box in the Homepage.'),
    createData('Change layout',
        'Click the \'Layout\' button in the Homepage.')
]

const useStyles = makeStyles({
    action: {
        width: 130
    },
    label: {
        color: 'black',
        fontSize: 18,
        textDecoration: 'underline',
        fontWeight: 'bold'
    },
})

const InstructionTable = () => {
    const classes = useStyles();

    return (
        <div>
            <FormLabel className={classes.label}>Quick Start</FormLabel>
            <br/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.action}>Action</StyledTableCell>
                            <StyledTableCell>Instruction</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.action}>
                                <StyledTableCell component="th" scope="row">
                                    {row.action}
                                </StyledTableCell>
                                <StyledTableCell>{row.instruction}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default InstructionTable
