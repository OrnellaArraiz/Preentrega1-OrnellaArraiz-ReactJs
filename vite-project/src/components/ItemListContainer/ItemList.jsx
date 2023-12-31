import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-3">Procesando...</h2>;
    }
    
    return (
    <div className="container">
        <h1 className="text-center mb-4">Productos</h1>
        <ul className="list-group">
            {items.map((item) => (
            <li className="list-group-item" key={item.id}>
                <Link to={`/item/${item.id}`} className="text-decoration-none">
                    <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                        <div className="mb-2 mb-md-0">
                            <h3 className="mb-0">{item.name}</h3>
                            <p className="mb-0">{item.category}</p>
                        </div>
                        <img src={item.image} alt={`Imagen de ${item.name}`} className="img-fluid rounded" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                        <span className="badge bg-primary">${item.price}</span>
                    </div>
                </Link>
            </li>
            ))}
        </ul>
    </div>
    );
};             

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;
