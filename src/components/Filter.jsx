import React from "react";
import { Button, Container, FormControl, FormSelect, InputGroup } from "react-bootstrap";

const Filter = () => {
  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          
        </InputGroup>
        <InputGroup className="mb-3">
        <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <FormSelect
            typeof="text"
            placeholder="Buscar"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="btn btn-primary" id="button-addon2">
            Buscar
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Filter;
