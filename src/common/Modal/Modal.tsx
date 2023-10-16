import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./Modal.css"

const ModalPopup: React.FunctionComponent<any> = (props: any) => {
  const { children, titleName, showPopup, handleShow, handleClose } = props;
  const [show, setShow] = useState(showPopup);

  const handleClosePopup = () => handleClose;
  const handleShowPopup = () => handleShow;
  return (
    <Modal show={showPopup} onHide={handleClosePopup}>
      <Modal.Header>
        <Modal.Title>{titleName}</Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  )
}

export default ModalPopup