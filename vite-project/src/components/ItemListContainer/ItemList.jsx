import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-3">Procesando...</h2>;
    }
    
    return (
    <div className="container">
        <h1 className="text-center mb-4">Producto</h1>
        <ul className="list-group">
            {items.map((item) => (
            <li className="list-group-item" key={item.id}>
                <Link to={`/item/${item.id}`} className="text-decoration-none">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">{item.name}</h3>
                        <span className="badge bg-primary">${item.price}</span>
                    </div>
                    <p className="mb-0">{item.category}</p>
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