import React from "react";
import { Button } from "@mui/material";
export const DeleteButton = () => {
  return (
    <div>
      <Button variant="contained" size="small" onClick={() => alert("deleted")}>
        Delete
      </Button>
    </div>
  );
};
export const EditButton = () => {
  return (
    <div>
      <Button variant="contained" size="small" onClick={() => alert("EDITED")}>
        Edited
      </Button>
    </div>
  );
};
export const AddNewButton = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => alert("new member added")}>
        add member
      </Button>
    </div>
  );
};
