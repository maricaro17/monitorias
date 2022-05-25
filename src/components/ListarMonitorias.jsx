import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import FormRegisterMonitorias from "./FormRegisterMonitorias";
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
const ListarMonitorias = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Container>
        <h1 className="text-white">Lista de Monitorias</h1>
        <Table striped bordered hover className="bg-light">
          <thead>
            <tr>
              <th>Materia</th>
              <th>Monitor</th>
              <th>Fecha</th>
              <th>Salon</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.materia}</td>
                <td>{item.monitor}</td>
                <td>{item.fecha}</td>
                <td>{item.salon}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button onClick={() => setModalShow(true)}>
                  Agregar Monitorias
                </Button>
                <FormRegisterMonitorias
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  data={data}
                />
              </td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default ListarMonitorias;
