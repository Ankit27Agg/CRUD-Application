import Home from "./Pages/Home/Home";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import CreateProduct from "./Pages/Product/Create/CreateProduct";
import EditProduct from "./Pages/Product/Edit/EditProduct";
import Products from "./Pages/Product/Products/Products";
import ViewProduct from "./Pages/Product/View/ViewProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/products" element={<div><Products /></div>} />
          <Route path="/:id/editproduct" element={<div><EditProduct /></div>} />
          <Route path="/:id/viewproduct" element={<div><ViewProduct /></div>} />
          <Route path="/createproduct" element={<div><CreateProduct /></div>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
