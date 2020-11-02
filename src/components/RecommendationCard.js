
import React from "react";
import {Button,Modal } from "react-bootstrap";

//   I din't convert this in to classs component ... written directly like this

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  if(message.length >35){
    let msg = message.slice(0,35)+"...";
  }
  else{
    let msg = message;
  }

  return (

    <div className="col-12 col-md-4"  onClick={handleShow}>
    

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        
        <Modal.Header closeButton>
         
        </Modal.Header>

        <Modal.Body>
          <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{message}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{message}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
      </div>

    

    </div>
  );
}

export default RecommendationCard;

/*

import React, { Component } from "react";
import { context } from "../context";

class RecommendationCard extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="col-12 col-md-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{this.context.message}</h4>
            <p className="card-text text-secondary mb-0">{this.context.name}</p>
            <p className="card-text text-secondary">
              {this.context.designation} at {this.context.company}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendationCard;

*/