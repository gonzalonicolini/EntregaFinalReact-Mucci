import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">                                     
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                    <Categorias/>
                </ul>
                <CartWidget cantCarrito={100}/>
        
        </nav>
    );
}

export default Navbar;
