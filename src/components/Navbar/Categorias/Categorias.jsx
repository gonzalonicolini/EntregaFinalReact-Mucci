import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-light">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/Tortas-clasicas"}>Tortas clasicas </Link></li>
            <li><Link className="dropdown-item" to={"/category/Tiny"}>Tiny cakes</Link></li>
            <li><Link className="dropdown-item" to={"/category/Individuales"}>Individuales</Link></li>
            <li><Link className="dropdown-item" to={"/category/Boxes"}>Boxes</Link></li>
          </ul>
        </li>
    );
}

export default Categorias;
