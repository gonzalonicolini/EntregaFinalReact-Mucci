import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)
        //Variable    //Modificar var     //Estado inicial

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador> valInicial)  && setContador(contador - 1) //operador ternario sin else
    
    return (
        <>
         <button className='btn btn-dark' onClick={(e) => 
            sumar()} >+</button>   
         {contador}
         <button className='btn btn-dark' onClick={(e) => 
            restar()} >-</button>
        </>
    );
}

export default ItemCount;
