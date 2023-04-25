import { useState, useEffect } from "react";
import ItemListPresentation from "./ItemListPresentation";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const {categoriaNombre} = useParams()

  useEffect(() => {

    const productsFilter = productos.filter (item => item.categoria === categoriaNombre)
    const tarea = new Promise((resolve, reject) => {
      resolve(categoriaNombre ? productsFilter : productos);
    });


    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [ categoriaNombre ]);

  return (
    <div>
      <ItemListPresentation items={items} />
    </div>
  );
};

export default ItemListContainer;

