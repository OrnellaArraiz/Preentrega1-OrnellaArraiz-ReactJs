import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        {/* Por producto */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App