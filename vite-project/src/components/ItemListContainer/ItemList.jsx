import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-3">Procesando...</h2>;
    }
    
    return (
    <div>
        <h1>Producto</h1>
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                <Link to={`/item/${item.id}`}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>{item.category}</p>
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