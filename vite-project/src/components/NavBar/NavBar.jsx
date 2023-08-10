import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">La Relojería</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    )
}

export default NavBar;