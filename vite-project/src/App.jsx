function App() {
  const products =[
    { id: 1, name: "Reloj dorado", price: 85, stock: 23},
    { id: 2, name: "Reloj marrón", price: 85, stock: 20},
    { id: 3, name: "Reloj negro", price: 85, stock: 12},
    { id: 4, name: "Reloj plateado", price: 85, stock: 30},
    { id: 5, name: "Reloj rosa", price: 85, stock: 21},
    { id: 6, name: "Reloj smartwatch dorado", price: 95, stock: 43},
    { id: 7, name: "Reloj smartwatch marrón", price: 95, stock: 23},
    { id: 8, name: "Reloj smartwatch negro", price: 95, stock: 50},
    { id: 9, name: "Reloj smartwatch plateado", price: 95, stock: 10},
    { id: 10, name: "Reloj smartwatch rosa", price: 95, stock: 47},
    { id: 11, name: "Reloj smartwatch verde", price: 95, stock: 17},
    { id: 12, name: "Reloj verde", price: 85, stock: 25},
  ]
  
return (
    <>
      <div>
        <h1> Productos</h1>
        <div>
          {products.map(product => (
              <div key={product.id}>
                <span>{product.name}</span>
                <span>{product.price}</span>
                <span>{product.stock}</span>
              </div>
            ))
          }
        </div>
        
      </div>
      
    </>
  )
}

export default App
