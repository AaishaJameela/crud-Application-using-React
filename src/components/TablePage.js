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
import React from "react";
import { styled } from "@mui/material/styles";
import { AddNewButton, DeleteButton, EditButton } from "./ButtonsPages";

// const tableRows = details.map((info) => {
//   return (
//     <tr>
//       <td>{info.E_Id}</td>
//       <td>{info.E_firstname}</td>
//       <td>{info.E_surname}</td>
//       <td>{info.E_mobile}</td>
//       <td>{info.E_email}</td>
//     </tr>
//   );
// });
function datainTable(Id, Firstname, Lastname, mobile, emailId) {
  return { Id, Firstname, Lastname, mobile, emailId };
}
const rowsData = [
  datainTable(1, "pooja", "veeranki", 39256037486, "ajkdhjh"),
  datainTable(2, "udhay", "nidhi", 4370635, "ldfjk"),
  datainTable(3, "aaisha", "jameela", 7657834, "uagsdfg"),
];
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
            {rowsData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Id}
                </StyledTableCell>
                <StyledTableCell>{row.Firstname}</StyledTableCell>
                <StyledTableCell>{row.Lastname}</StyledTableCell>
                <StyledTableCell>{row.mobile}</StyledTableCell>
                <StyledTableCell>{row.emailId}</StyledTableCell>
                <StyledTableCell>
                  <DeleteButton />
                </StyledTableCell>
                <StyledTableCell>
                  <EditButton />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
