import React, {useState} from "react";
import Login from "./components/login";
import SignUp from "./components/sing-up";
import Modal from '@mui/material/Modal';
import { Tab } from "@mui/material";


function App() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <a href="login" onClick={() => setShowModal(true)}>Sign UP</a>
    <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        <Tab.Container defaultActiveKey='login'>
          <Modal.Body>
            <Tab.Content>
              <div eventKey='login'>
                <SignUp handleModalClose={() => setShowModal(false)} />
              </div>
              <div eventKey='signup'>
                <Login handleModalClose={() => setShowModal(false)} />
              </div>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      <SignUp></SignUp>
      <div>FarmGo Market</div>

      <Login></Login>
    </>
  );
}

export default App;
