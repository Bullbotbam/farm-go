import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../components/Login/loginIndex"
import photo from "../assets/groceries/greens.jpg";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER } from "../utils/mutations";

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

function SignUp(props) {
  //setting up inital form state
  const [customerFormState, setCustomerFormState] = useState({
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
  });

  const [addCustomer ] = useMutation(ADD_CUSTOMER);

 
  //signup functionality
  const handleFormSubmit = async (event) => {
    event.preventDefault();
   const mutationResponse = await addCustomer({
     variables: {
       firstName: customerFormState.firstName,
       lastName: customerFormState.lastName,
       email: customerFormState.email, 
       password: customerFormState.password
     }
   })
   const token = mutationResponse.data.addCustomer.token;
   Auth.login(token)
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerFormState({ ...customerFormState, [name]: value });
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //login modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
      <form
        onSubmit={handleFormSubmit}
        className="signRoot"
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
           type="text"
          label="First Name"
          name="firstName"
          onChange={handleInputChange}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
         type="text"
          label="Last Name"
          name="lastName"
          onChange={handleInputChange}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />
        <TextField
          type="email"
          label="Email Address"
          name="email"
          onChange={handleInputChange}
          variant="outlined"
          required={true}
          style={{ margin: "5%", display: "grid" }}
        />
        <TextField
          type="password"
          label="Create Password"
          name="password"
          onChange={handleInputChange}
          variant="outlined"
          required={true}
          style={{ margin: "5%", display: "grid" }}
        />
        <Stack >
          <Button   type="submit"
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
