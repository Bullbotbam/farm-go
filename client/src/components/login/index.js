import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import Modal from "react-modal";
import SignUp from "../Sing-up";
import CloseIcon from "@mui/icons-material/Close";

function Login() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      padding: "50px 50px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

    },
  };

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  //sign up modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // setUserData({
  //   username: "",
  //   email: "",
  //   password: ""
  // })

  return (
    <React.Fragment>
      <Modal
        fluid
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="signUp Modal"
      >
        <CloseIcon onClick={closeModal} />

        <div>
          <SignUp handleModalClose={() => setIsOpen(false)} />
        </div>
      </Modal>

      <form
        className="root"
        style={{
          border: "solid",
          borderWidth: "1px 1px",
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "white",
            background: "green",
            padding: "15px 15px",
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
          <Button onClick={openModal}>Create an account</Button>
        </Stack>
      </form>
    </React.Fragment>
  );
}

export default Login;
