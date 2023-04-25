import React, { useEffect, useState } from "react";
import ItemDetailPresentation from "./ItemDetailPresentation";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  //Traer productos por id
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrarPorId = productos.find((prod) => prod.id === +id);
    setProduct(encontrarPorId);
  }, [id]);

  return (
    <div>
      <ItemDetailPresentation product={product} />
    </div>
  );
};

export default ItemDetailContainer;
