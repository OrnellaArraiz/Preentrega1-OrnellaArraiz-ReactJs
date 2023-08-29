import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-3">Procesando...</h2>;
    }
    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Producto no encontrado</h2>;
    }
    
    return (
        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-text">${item.price}</p>
            <p className="card-text">{item.category}</p>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;