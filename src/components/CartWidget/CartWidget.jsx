import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
/* import ItemCount from "../ItemCount/ItemCount"; */

const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <Link className="nav-link" to={'/cart'}> <button className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus}/></button> </Link>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
