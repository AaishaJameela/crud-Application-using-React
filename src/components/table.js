import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import axios from "axios";

export default function TAble() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const getData = () => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>E_ID</TableCell>
            <TableCell align="right">E_FirstName</TableCell>
            <TableCell align="right">E_LastName &nbsp;</TableCell>
            <TableCell align="right">E_Mobile Number &nbsp;</TableCell>
            <TableCell align="right">E_Email ID &nbsp;</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {APIData.map((data) => {
            <TableRow key={data.id}></TableRow>;
            return (
              <TableRow>
                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.emailID}&nbsp;</TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
                <br />

                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.emailID}&nbsp;</TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
                <br />

                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.emailID}&nbsp;</TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
                <br />

                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.emailID}&nbsp;</TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
                <br />

                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.mobileNumber}</TableCell>
                <TableCell align="right">{data.emailID}&nbsp;</TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
                <br />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
