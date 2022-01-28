import * as React from "react";
import {Button, Dialog, DialogActions, DialogTitle, TableCell, tableCellClasses, TableContainer} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import {Link as RouterLink} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {Tooltip} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const DeleteButton = (props) => {
    const {id} = props;

    const [alert, setAlert] = useState(false);

    const handleDeleteButton = () => {
        setAlert(true);
    };

    const handleClose = () => {
        setAlert(false);
    };

    const handleSubmit = () => {
        fetch("/api/blogPost/delete/" + id,{
            method:'DELETE',
        }).then(() => {
            window.location.reload(true);
        });
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleDeleteButton}>
                <DeleteIcon fontSize={"inherit"}/>
            </IconButton>

            <Dialog
                open={alert}
                onClose={handleClose}
            >
                <DialogTitle>
                    Are you sure to delete this article?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default function DashBoardArticle() {

    const [abstracts, setAbstracts] = useState([]);
    const [firstLoad, setLoad] = useState(true);

    async function fetchAbstracts() {
        let response = await fetch("/api/blogPost/getAllAbstracts");
        let list = await response.json();
        setAbstracts(list);
    }

    if (firstLoad) {
        fetchAbstracts().then(() => {
            setLoad(false)
        });
    }

    return (
        <Box>
            <TableContainer sx={{maxWidth: '90%', mx: 'auto', mt: 4}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Article Title</StyledTableCell>
                            <StyledTableCell align="center">Update Date</StyledTableCell>
                            <StyledTableCell align="center">Edit</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {abstracts.map((abstract) => (
                            <TableRow
                                key={abstract.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {abstract.articleTitle}
                                </StyledTableCell>
                                <StyledTableCell align="center">{abstract.articlePostTime}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton component={RouterLink} to={`/dashboard/edit?articleId=${abstract.id}`}>
                                        <EditIcon/>
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <DeleteButton id={abstract.id}/>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <IconButton component={RouterLink} to={"/dashboard/addNewArticle"} sx={{position:'relative', left: '50%', mt: 2}}>
                <Tooltip title={"Add New Article"}>
                    <AddIcon color={"primary"}/>
                </Tooltip>
            </IconButton>

        </Box>
    );
}