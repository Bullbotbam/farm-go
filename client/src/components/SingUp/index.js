import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../Login/loginIndex";
import photo from "../../assets/groceries/greens.jpg";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER } from "../../utils/mutations";

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
  //setting up inital form state
  const [customerFormData, setCustomerFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // const [validated] = useState(false);
  // const [showAlert, setShowAlert ] = useState(false)
  const [addCustomer, { error }] = useMutation(ADD_CUSTOMER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerFormData({ ...customerFormData, [name]: value });
  };
  //signup functionality
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addCustomer({
        varibales: { ...customerFormData },
      });
      Auth.login(data.addCustomer.token);
    } catch (e) {
      console.error(e);
    }

    try {
      const { data } = await addCustomer({
        variables: { ...customerFormData },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
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
        noValidate
        validated="false"
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
          value={customerFormData.firstName}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />

        <TextField
         type="text"
          label="Last Name"
          name="lastName"
          onChange={handleInputChange}
          value={customerFormData.lastName}
          variant="outlined"
          style={{ margin: "5%", display: "grid" }}
        />
        <TextField
          type="email"
          label="Email Address"
          name="email"
          onChange={handleInputChange}
          value={customerFormData.email}
          variant="outlined"
          required={true}
          style={{ margin: "5%", display: "grid" }}
        />
        <TextField
          type="password"
          label="Create Password"
          name="password"
          onChange={handleInputChange}
          value={customerFormData.password}
          variant="outlined"
          required={true}
          style={{ margin: "5%", display: "grid" }}
        />
        <Stack >
          <Button
            disabled={
              !(
                customerFormData.firstName &&
                customerFormData.lastName &&
                customerFormData.email &&
                customerFormData.password
              )
            }
            variant="contained"
            color="success"
            style={{ margin: "5%", alignSelf: "center", display: "grid" }}
          >
            Submit
          </Button>
          <Button onClick={openModal}>Have an account? Login</Button>
        </Stack>
      </form>
      {error && <div>Sign up failed</div>}
    </React.Fragment>
  );
}

export default SignUp;
