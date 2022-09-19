import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Link,
} from "@mui/material";

const EmployeeDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const postData = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
      firstName,
      lastName,
      mobileNumber,
      emailID,
    });
  };
  return (
    <center>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <FormHelperText id="my-helper-text">First Name</FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <FormHelperText id="my-helper-text">Last Name</FormHelperText>
      </FormControl>{" "}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setMobileNumber(e.target.value)}
          value={mobileNumber}
        />
        <FormHelperText id="my-helper-text">Mobile Number</FormHelperText>
      </FormControl>{" "}
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">E-mail ID</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setEmailID(e.target.value)}
          value={emailID}
        />
        <FormHelperText id="my-helper-text">E-mail ID</FormHelperText>
      </FormControl>
      <br />
      <Button variant="contained" color="error">
        Clear
      </Button>
      &nbsp;
      <Link href="table" underline="none">
        <Button variant="contained" color="success" onClick={postData}>
          Submit
        </Button>
      </Link>
    </center>
  );
};

export default EmployeeDetails;
