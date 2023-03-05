import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faFacebook,  faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export const Footer = () =>{
    return(
        <footer id="footer">
            <div>
                <h4>¡Seguinos en nuestras redes!</h4>
                <br></br>
                <ul>                                        
                    <li> <FontAwesomeIcon icon={faInstagram} /> Instagram</li>
                    <li> <FontAwesomeIcon icon={faFacebook} /> Facebook</li>                 
                    <li>  <FontAwesomeIcon icon={faWhatsapp}/> Whatsapp</li>
                    <br></br>
                    <h6>Desarrollado por Mauro Mucci</h6>
                </ul>                   
            </div>       

            
        </footer>
    )
}