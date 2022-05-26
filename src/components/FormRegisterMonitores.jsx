import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Modal,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { createMonitor } from "../redux/actions/monitorAction";

const FormRegisterMonitores = (props) => {
  const dispatch = useDispatch()
  const initialState = {
    name: "",
    lastname: "",
    semestre: 0,
    programAcademy: "",
    documentNumber: 0,
    email: "",
    phone: "",
  };
  const [form, handleInputChange, reset] = useForm(initialState);

  const {
    name,
    lastname,
    semestre,
    programAcademy,
    documentNumber,
    email,
    phone,
  } = form;

  const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(createMonitor(form))
    reset()
  }
  return (
    <div>
      <Container>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Registro de Monitores
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Nombres:</Form.Label>
                <Form.Control
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Ingrese nombres del monitor"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name="lastname"
                  value={lastname}
                  onChange={handleInputChange}
                  placeholder="Ingrese apellidos del monitor"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cedula:</Form.Label>
                <Form.Control
                  name="documentNumber"
                  value={documentNumber}
                  onChange={handleInputChange}
                  placeholder="Numero de documento"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Programa Academico:</Form.Label>
                <Form.Control
                  name="programAcademy"
                  value={programAcademy}
                  onChange={handleInputChange}
                  placeholder="Programa academico"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Semestre:</Form.Label>
                <FormControl name="semestre" value={semestre} onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" value={email} onChange={handleInputChange} placeholder="example@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono:</Form.Label>
                <Form.Control
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  placeholder="Telefono de contacto"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSubmit} >Guardar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default FormRegisterMonitores;
