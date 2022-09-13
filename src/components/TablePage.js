import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TablePage = () => {
  return (
    <div>
      TablePage
      <TableContainer component={Paper} align="center">
        <Table size="small" sx={{ minWidth: 650, backgroundColor: "pink" }}>
          <TableHead backgroundColor="pink">
            <TableCell align="center"> FIRST NAME</TableCell>
            <TableCell align="center"> LAST NAME</TableCell>
            <TableCell align="center"> ID </TableCell>
            <TableCell align="center"> MOBILE</TableCell>
            <TableCell align="center"> EMAIL</TableCell>
            <Button
              variant="contained"
              size="small"
              onClick={() => alert("EDITED")}
            >
              Edited
            </Button>
            <TableCell align="center"> </TableCell>
            <TableCell align="center">
              <Button onClick={() => alert("deleted")}>Delete</Button>
            </TableCell>
          </TableHead>
          <TableBody align="left">
            <StyledTableRow>
              <TableCell align="center"> Edit</TableCell>
              <TableCell align="center"> Edit</TableCell>
              <TableCell align="center"> Edit</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell align="center"> Edit</TableCell>
              <TableCell align="center"> Edit</TableCell>
              <TableCell align="center"> Edit</TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
