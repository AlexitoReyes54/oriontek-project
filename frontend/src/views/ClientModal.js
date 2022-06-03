import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { DirectionHelper } from "../components/DirectionHelper";
import { useClientsCrud } from "../customHooks/useClientsCrud";
import { useDirectionCrud } from "../customHooks/useDirectionCrud";
export default function ClientModal({
  show,
  onHide,
  loadClients,
  title,
  client_id,
  handleChange
}) {
  const [directions, setDirections] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const { createClient,requestClientById,updateClient } = useClientsCrud();
  const { createDirection,requestDirectionsByClientId,updateDirection,deleteClientDirections } = useDirectionCrud();
  const [directionState, setDirectionState] = useState({
    street: "",
    postal_code: "",
    client_id:0,
    id:0
  });
  const [id, setId] = useState(0);

  useEffect(() => {
    if (client_id > 0) {
      loadData()
    }
    
  },[client_id]);

  let loadData = async () => {
    let client = await requestClientById(client_id);
    let directionsResponse = await requestDirectionsByClientId(client_id)
    if(directionsResponse.length > 0){
      setDirections(directionsResponse)
    }
    setName(client.name)
  }

  const cleanState = () => {
    setDirectionState({
      street: "",
      postal_code: "",
    });
    setId(0);
    setDirections([]);
    setIsEditing(false);
    setName("");
  };

  const handleClose = () => {
    if (directions.length === 0) {
      onHide();
      cleanState();
    } else {
      if (window.confirm("¿Do you want to exit without saving?")) {
        onHide();
        //cleanState();
      }
    }
  };

  const deleteDirection = (index) => {
    if (window.confirm("Are you sure?")) {
      let newDirections = [...directions];
      newDirections.splice(index, 1);
      setDirections(newDirections);
    }
  };

  const handleupdateDirection = (index, direction) => {
    console.log("save add update");
    if (direction.street !== "" && !isNaN(direction.postal_code)) {
      if (
        !directions.find(
          (d) =>
            d.street === direction.street &&
            d.postal_code === direction.postal_code
        )
      ) {
        let newDirections = [...directions];
        direction["client_id"] = client_id
        newDirections[index] = direction;
        console.log(direction);
        setDirections(newDirections);
        return true;
      } else {
        alert("this street already exists");
      }
    } else {
      alert(
        "Please, fill the street and the postal code correctly : postal code must be a number"
      );
      return false;
    }
  };

  const addDirection = ({ street, postal_code },id) => {
    let newDirection;
    if (id) {
      newDirection = {
        street,
        postal_code,
        client_id,
        id
      }
    }else{
      newDirection = {
        street,
        postal_code
      }
    }
    
    setDirections([...directions, newDirection]);
  };

  const saveData = async () => {
    if (name.trim().length > 0) {
      const resp = await createClient(name);
      const { id } = resp;
      if (resp) {
        const clientId = id;
        if (directions.length > 0) {
          directions.forEach((direction) => {
            createDirection({
              street: direction.street,
              postal_code: direction.postal_code,
              client_id: clientId,
            });
          });
        }
        onHide();
        cleanState();
        loadClients();
        handleChange();
      }
    }
    
  };

  const updateData = async () => {
      await updateClient({name,id:client_id})
      const resp = await deleteClientDirections(client_id);
      
      
        console.log("algo");
        if (directions.length > 0) {
          directions.forEach(async (direction) => {
              await createDirection({
                street: direction.street,
                postal_code: direction.postal_code,
                client_id,
              });
              console.log();
          });
          
        }
        onHide();
        cleanState();
        loadClients();
        handleChange();
    
  };

  return (
    <>
      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="exmaple: Pedro or Banco Popular"
                autoFocus
              />
            </Form.Group>
          </Form>
          <Dropdown.Divider />
          <DirectionHelper
            deleted={deleteDirection}
            add={addDirection}
            directions={directions}
            update={handleupdateDirection}
            setDirectionState={setDirectionState}
            isEditing={isEditing}
            directionState={directionState}
            id={id}
            setId={setId}
            setIsEditing={setIsEditing}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => { 
              if (client_id > 0) {
                updateData();
              } else {
                saveData();
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
