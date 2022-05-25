import React from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

const FormRegisterMonitores = (props) => {
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
                  name="name"
                  placeholder="Ingrese nombres del monitor"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name="apellidos"
                  placeholder="Ingrese apellidos del monitor"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cedula:</Form.Label>
                <Form.Control
                  name="cedula"
                  placeholder="Telefono de contacto"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Programa Academico:</Form.Label>
                <Form.Control
                  name="programa"
                  placeholder="Programa academico"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Semestre:</Form.Label>
                <Form.Control name="semestre" placeholder="Ingrese semestre" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" placeholder="example@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono:</Form.Label>
                <Form.Control
                  name="telefono"
                  placeholder="Telefono de contacto"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Guardar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default FormRegisterMonitores;
