import React from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";

function SignUp() {
  return (
    <React.Fragment>
     <form className="root" style={{ border: "solid",  borderWidth: "1px 1px",
  maxWidth: "50%", margin: "0 auto"}}>
          <h2 style={{ color: "white", background: "green", padding: "15px 15px", textAlign: "center"}}>
            Register</h2> 
          <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ margin: "5%", display:"grid"}}
        />

        <TextField 
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ margin: "5%", display:"grid"}}
        />
         <TextField 
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ margin: "5%", display:"grid"}}
        />
        <Stack direction="row" >
          <Button variant="contained" color="success" style={{ margin: "5%", alignSelf: "center", display:"grid"}}>
         Submit
          </Button>
        </Stack>
      </form>
    </React.Fragment>
  );
}

export default SignUp;
