import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteMonitor, getMonitores } from "../redux/actions/monitorAction";
import FormRegisterMonitores from "./FormRegisterMonitores";

const ListarMonitores = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const monitores = useSelector((state) => state.monitores);
  const [modalShow, setModalShow] = useState(modal);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      dispatch(getMonitores());
      setIsLoading(false);
    }
  }, [dispatch, monitores, modal, isLoading]);
  return (
    <div>
      <Container>
        <h1 className="text-white">Lista de Monitores</h1>
        <Table striped bordered hover className="bg-light">
          <thead>
            <tr>
              <th className="">
                Nombres{" "}
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Apellidos
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Cedula
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Programa
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Semestre
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Telefono
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th className="">
                Email
                <button className="float-end">
                  <FaFilter />
                </button>
              </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {monitores.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.documentNumber}</td>
                <td>{item.programAcademy}</td>
                <td>{item.semestre}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-success text-white mx-2">
                    Editar
                  </button>
                  <button className="btn btn-danger text-white mx-2" onClick={()=>dispatch(deleteMonitor(item))}>
                    Eliminar
                  </button>
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
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button onClick={() => setModalShow(true)}>
                  Agregar Monitores
                </Button>
                <FormRegisterMonitores
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default ListarMonitores;
