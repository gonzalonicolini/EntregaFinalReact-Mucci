import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
/* import ItemCount from "../ItemCount/ItemCount"; */

const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <Link className="nav-link" to={'/cart'}> 
                <button className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus}/></button> 
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CartWidget;
