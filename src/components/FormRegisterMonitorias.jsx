import React from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
const data = [
    {
      id: 1,
      materia: "Matematica",
      monitor: "Maria Dolores de Cabeza",
      fecha: "14/03/23",
      salon: "001",
    },
    {
      id: 2,
      materia: "Estadisticas",
      monitor: "Alan Brito Delgado",
      fecha: "15/03/23",
      salon: "002",
    },
    {
      id: 3,
      materia: "Ingles",
      monitor: "Bob Esponja",
      fecha: "16/03/23",
      salon: "003",
    },
  ];
const FormRegisterMonitorias = (props) => {
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
              Registro de Monitorias
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Materia:</Form.Label>
                <Form.Control name="materia" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Monitor Asignado:</Form.Label>
                <Form.Select name="monitor">
                    {data.map((item)=>(
                        <option  key={item.id} value={item.id}>{item.monitor}</option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Fecha:</Form.Label>
                <Form.Control name="fecha" placeholder="Telefono de contacto" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Salon:</Form.Label>
                <Form.Control name="salon" />
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

export default FormRegisterMonitorias;
