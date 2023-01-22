import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
/* import ItemCount from "../ItemCount/ItemCount"; */

const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus}/></button>            
            {cantCarrito}
            
            
        </>
    );
}

export default CartWidget;
