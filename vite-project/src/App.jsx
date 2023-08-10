import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer greeting = "La Relojería. Proximamente..."/>
    </div>
  )
}

export default App