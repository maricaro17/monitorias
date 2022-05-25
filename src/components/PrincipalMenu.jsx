import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrincipalMenu = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div>
            <div>
              <img
                width="250px"
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1653452537/IPSM/CONSULTA_3_ncslk4.png"
                alt="monitor"
              />
            </div>
            <div>
              <Link className="nav-link text-white bold text-decoration-none mx-4" to="/monitores">Monitores</Link>
            </div>
          </div>
          <div>
            <div>
              <img
                width="250px"
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1653452539/IPSM/CONSULTA_4_wxkem6.png"
                alt="monitorias"
              />
            </div>
            <div>
              <Link className="nav-link text-white bold text-decoration-none mx-4" to="/monitorias">Monitorias</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrincipalMenu;
