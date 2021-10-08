import React  from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../Login"
import photo from "../../assets/groceries/greens.jpg"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      padding: "50px 50px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundImage:`url(${photo})`,
      backgroundSize: "cover"
    },
  };
   
function LoginModal() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //sign up modal
 
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

 
return (
    <Modal
    // styles={{ backgroundImage:`url(${photo})` }}
      fluid
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="signUp Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <CloseIcon onClick={closeModal} />

      <div>
        <Login handleModalClose={() => setIsOpen(false)} />
      </div>
    </Modal>
)
  } 
  export default LoginModal;