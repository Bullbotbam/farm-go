import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";


function Login(props) {
  const [customerFormState, setCustomerFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: {
          email: customerFormState.email,
          password: customerFormState.password,
        },
      });
      const token = mutationResponse.data.login.token;

      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerFormState({ ...customerFormState, [name]: value });
  };

  return (


    <React.Fragment>
      <form
        onSubmit={handleFormSubmit}
        className="loginRoot"
        style={{
          border: "solid",
          borderWidth: "1px 1px",
          maxWidth: "50%",
          margin: "0 auto",
          background: "white",
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
          type="email"
          label="Email"
          name="email"
          onChange={handleInputChange}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          onChange={handleInputChange}
          require={true}
          style={{ margin: "5%", display: "grid" }}
        />
        {error ? (
          <div>
            <p className="">Credentials are incorrect</p>
          </div>
        ) : null}
        <Stack direction="row">
          <Button
            color="success"
            type="submit"
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
