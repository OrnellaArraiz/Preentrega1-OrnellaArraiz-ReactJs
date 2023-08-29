const CartWidget = () => {
    return <div className="container">
        <div className="d-flex justify-content-end align-items-center">
        <button className="btn btn-outline-primary position-relative">
            <i className="bi bi-cart3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2
                <span className="visually-hidden">Productos en carrito</span>
            </span>
        </button>
    </div>
    </div>;
}

export default CartWidget;