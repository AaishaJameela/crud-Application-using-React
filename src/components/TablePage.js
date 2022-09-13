import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { AddNewButton, DeleteButton, EditButton } from "./ButtonsPages";

// const [dataInTable, setdataInTable] = useState({
//   Id: 1,
//   firstname: "pooja",
//   lastname: "veeranki",
//   mobile: "1214536",
//   email: "abvc@gmail.com",
// });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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
      <AddNewButton />
      <TableContainer component={Paper} align="center">
        <Table size="small" sx={{ minWidth: 650 }}>
          <TableHead>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>FIRST NAME</StyledTableCell>
            <StyledTableCell>LAST NAME</StyledTableCell>
            <StyledTableCell>MOBILE</StyledTableCell>
            <StyledTableCell>EMAIL</StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>
                <DeleteButton />
              </StyledTableCell>
              <StyledTableCell>
                <EditButton />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>abc</StyledTableCell>
              <StyledTableCell>
                <DeleteButton />
              </StyledTableCell>
              <StyledTableCell>
                <EditButton />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
