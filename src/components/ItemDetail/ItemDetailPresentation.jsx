import React from "react";
import { productos } from "../../productsMock";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ItemDetailPresentation = ({ product }) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <img src={product.img} className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2>{product.titulo}</h2>
            <p>{product.descripcion}</p>
            <p>${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div classNameName="row"></div>
      </div>
    </div>
  );
};

export default ItemDetailPresentation;
