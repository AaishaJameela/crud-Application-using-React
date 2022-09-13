import React from "react";
import { Button } from "@mui/material";
import { FormPage } from "./FormPage";
export const DeleteButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "blue",
          width: "12px",
          height: "15px",
          fontSize: "10px",
        }}
        onClick={() => alert("deleted")}
      >
        Delete
      </Button>
    </div>
  );
};
export const EditButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "green",
          width: "12px",
          height: "15px",
          fontSize: "10px",
        }}
        onClick={() => alert("Edited")}
      >
        Edit
      </Button>
    </div>
  );
};
export const AddNewButton = () => {
  return (
    <div>
      <Button variant="contained" onClick={FormPage()}>
        add member
      </Button>
    </div>
  );
};
