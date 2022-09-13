//import { useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <center>
        <h1>FORM</h1>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">E-mail ID</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="error">
          Clear
        </Button>
        &nbsp;
        <Button variant="contained" color="success">
          Submit
        </Button>
      </center>
    </div>
  );
}

export default App;
