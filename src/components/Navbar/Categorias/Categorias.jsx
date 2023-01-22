
const Categorias = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-light">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Tortas clasicas </a></li>
            <li><a className="dropdown-item" href="#">Tiny cakes</a></li>
            <li><a className="dropdown-item" href="#">Inviduales</a></li>
            <li><a className="dropdown-item" href="#">Boxes</a></li>
          </ul>
        </li>
    );
}

export default Categorias;
