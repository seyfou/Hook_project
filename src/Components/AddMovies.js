import React from 'react'
import { Button,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Components.css';
import {useState} from 'react';


function AddMovies({add}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newM, setNewM] = useState([]);
    const handleChange=(event)=>{
      setNewM(el=>({...el,[event.target.name]:event.target.value}))
    }

    return (
        <div >
     <Button onClick={handleShow} className="modal2">
        Add new movie
      </Button>
           <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body> <div>
                  <div className="bigDiv">
                      <label className="input">Title</label>
                      <input type="text" name="name" onChange={handleChange} />
                  </div>
                  <div className="bigDiv">
                  <label className="input">URL image</label>
                  <input type="text" name="image" onChange={handleChange} />
                  </div>
                 
                  <div className="bigDiv">
                      <label className="input">Description</label>
                      <input type="text" name="description" onChange={handleChange} />
                  </div>
                  <div className="bigDiv">
                      <label className="input">Movie url</label>
                      <input type="text" name="url" onChange={handleChange} />
                  </div>
                  <div className="bigDiv">
                      <label className="input">Rating</label>
                      <input type="text" name="rating" onChange={handleChange} />
                  </div>
              </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(newMovie)=>add(newM)} >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal> 
        </div>
    )
}

export default AddMovies;