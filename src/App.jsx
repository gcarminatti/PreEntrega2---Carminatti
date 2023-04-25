import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes,Route } from 'react-router-dom';

import NavbarMain from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import { TypeH1 } from "react-bootstrap-icons";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route element = {<NavbarMain />} >
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/Categoria/:categoriaNombre" element={<ItemListContainer/>} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartWidget/>} />

        <Route path="*" element={<h1> Este sitio no existe</h1>} />
        
        </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;








// {/* <div className="App">
//       <NavbarMain />
//       <ItemListContainer />
//       <ItemDetailContainer />
    
//       {/* <FetchingData /> */}
//     </div> */}