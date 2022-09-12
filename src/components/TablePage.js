import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Paper,
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
        <Table size="small" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableCell align="center"> FIRST NAME</TableCell>
            <TableCell align="center"> LAST NAME</TableCell>
            <TableCell align="center"> ID </TableCell>
            <TableCell align="center"> MOBILE</TableCell>
            <TableCell align="center"> EMAIL</TableCell>
          </TableHead>
          <TableBody align="left">
            <StyledTableRow>
              <TableCell> </TableCell>
              <TableCell> FIRST NAME</TableCell>
              <TableCell> FIRST NAME</TableCell>
              <TableCell> FIRST NAME</TableCell>
            </StyledTableRow>
            <TableRow>
              <TableCell>p</TableCell>
              <TableCell>p</TableCell>
              <TableCell>p</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
