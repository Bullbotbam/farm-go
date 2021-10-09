import React from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../Login";
import photo from "../../assets/groceries/greens.jpg";
import Auth from "../../utils/auth"


//modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "80%",
    transform: "translate(-50%, -50%)",
    backgroundImage: `url(${photo})`,
    backgroundSize: "cover",
  },
};

function SignUp() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
//login modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //signup functionality
const handleSignSubmit = async (event) => {
  event.preventDefault();
  Auth.Login()
}



  return (
    <React.Fragment>
      <Modal
        fluid
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="signUp Modal"
      >
        <CloseIcon onClick={closeModal} style={{ color: "red" }} />

        <div>
          <Login handleModalClose={() => setIsOpen(false)} />
        </div>
      </Modal>
      <form onSubmit={handleSignSubmit}
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
            backgroundSize: "cover",
          }}
        >
          Register
        </h2>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />
        <Stack direction="row">
          <Button
            variant="contained"
            color="success"
            style={{ margin: "5%", alignSelf: "center", display: "grid" }}
          >
            Submit
          </Button>
          <Button onClick={openModal}>Have an account? Login</Button>
        </Stack>
      </form>

    </React.Fragment>
  );
}

export default SignUp;
