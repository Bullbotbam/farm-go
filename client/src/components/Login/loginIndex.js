import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Alert from '@mui/material/Alert';

function Login() {
  const [customerFormData, setCustomerFormData] = useState({
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerFormData({ ...customerFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variable: { ...customerFormData},
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.erroe(e);
    }


    setCustomerFormData({
    email: "",
    password: "",
  });
  };
  return (
    <React.Fragment>
      <form
        noValidate
        validated={validated}
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
         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
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
          value={customerFormData.email}
          variant="outlined"
          required={true}
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          onChange={handleInputChange}
          value={customerFormData.password}
          require={true}
          style={{ margin: "5%", display: "grid" }}
        />
        <Stack direction="row">
          <Button
           disabled={!(customerFormData.email && customerFormData.password)}
           type='submit'
            variant="sucess"
            color="success"
            style={{ margin: "5%", alignSelf: "center", display: "grid" }}
          >
            Login
          </Button>
        </Stack>
      </form>
      {error && <div>Login failed</div>}
    </React.Fragment>
  );
}

export default Login;
