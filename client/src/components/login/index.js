import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // setUserData({
  //   username: "",
  //   email: "",
  //   password: ""
  // })

  return (
    <React.Fragment>
      <form
        className="root"
        style={{
          border: "solid",
          borderWidth: "1px 1px",
          maxWidth: "50%",
          margin: "0 auto",
          background: "white"
        }}
      >
        <h2
          style={{
            display: "block",
            color: "white",
            background: "green",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Login
        </h2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleInputChange}
          value={userData.email}
          required
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handleInputChange}
          value={userData.password}
          style={{ margin: "5%", display: "grid" }}
        />
        <Stack direction="row">
          <Button
            variant="contained"
            color="success"
            style={{ margin: "5%", alignSelf: "center", display: "grid" }}
          >
            Login
          </Button>
        </Stack>
      </form>
    </React.Fragment>
  );
}

export default Login;