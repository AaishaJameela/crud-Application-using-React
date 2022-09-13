import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { DeleteButton, EditButton } from "./ButtonsPages";
import { styled } from "@mui/material/styles";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const TableCells = () => {
  return (
    <div>
      <StyledTableRow>
        <TableCell align="center">abc</TableCell>
        <TableCell align="center">abc</TableCell>
        <TableCell align="center">abc</TableCell>
        <TableCell align="center">abc</TableCell>
        <TableCell align="center">abc</TableCell>
        <TableCell align="center">
          <EditButton />
        </TableCell>
        <TableCell align="center">
          <DeleteButton />
        </TableCell>
      </StyledTableRow>
    </div>
  );
};
