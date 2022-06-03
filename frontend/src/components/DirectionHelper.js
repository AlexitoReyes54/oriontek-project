import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const DirectionHelper = (props) => {
  const {
    directions,
    deleted,
    add,
    update,
    setDirectionState,
    directionState,
    isEditing,
    setId,
    setIsEditing,
    id,
  } = props;

  const cleanDirectionState = () => {
    setDirectionState({
      street: "",
      postal_code: "",
      prueba:'prueba'
    });
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Street</Form.Label>
            <Form.Control
              value={directionState.street}
              onChange={(event) => {
                setDirectionState({
                  ...directionState,
                  street: event.target.value,
                });
              }}
              type="text"
              placeholder="example: Av. Siempre viva"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Postal code</Form.Label>
            <Form.Control
              type="text"
              placeholder="exmaple: 10302"
              value={directionState.postal_code}
              onChange={(event) => {
                setDirectionState({
                  ...directionState,
                  postal_code: event.target.value,
                });
              }}
            />
          </Form.Group>
        </Col>

        <Col style={{ marginTop: 32 }} className="col-3">
          {isEditing ? (
            <>
              <Button
                onClick={() => {
                  console.log("save");
                  if (update(id, directionState)) {
                    cleanDirectionState();
                    setIsEditing(false);
                  }
                }}
                variant="primary"
                type="button"
                className="btn btn-primary"
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  cleanDirectionState();
                  setIsEditing(false);
                }}
                variant="secondary"
                type="button"
                className="btn btn-secondary"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                console.log("added");
                if (
                  directionState.street !== "" &&
                  directionState.postal_code !== "" &&
                  !isNaN(directionState.postal_code)
                ) {
                  if (
                    directions.find(
                      (direction) =>
                        direction.street === directionState.street &&
                        direction.postal_code === directionState.postal_code
                    )
                  ) {
                    alert("this street already exists");
                  } else {
                    add(directionState);
                    cleanDirectionState();
                  }
                } else {
                  alert(
                    "Please, fill the direction and the postal code correctly : postal Code must be a number"
                  );
                }
              }}
              variant={"primary"}
              type="button"
            >
              Add
            </Button>
          )}
        </Col>
      </Row>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Street</th>
            <th>Postal code</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {directions.map((direction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{direction.street}</td>
              <td>{direction.postal_code}</td>
              <td>
                <Button
                  onClick={() => {
                    setId(index);
                    setIsEditing(true);
                    console.log(directions);
                    setDirectionState({
                      ...directionState,
                      street: direction.street,
                      postal_code: direction.postal_code,
                      id:direction.id
                    });
                  }}
                  variant="primary"
                  size="sm"
                >
                  
                  Edit
                </Button>
                <Button
                  onClick={() => deleted(index)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
