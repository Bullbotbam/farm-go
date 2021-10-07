import React from "react";
import TextField from "@mui/material/TextField";

function SignUp() {
  return (
    <React.Fragment>
      <form className="root" style={{ background: "red", margin: "50px", border: "solid"}}>
          <h2>SignUp</h2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "70%", margin: "5%" }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ width: "70%", margin: "5%"  }}
        />
      </form>
    </React.Fragment>
  );
}

export default SignUp;