import './App.css'
//Componentes
import Navbar from "./Navbar/Navbar";
import {ItemCount} from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
/* import CartWidget from './CartWidget/CartWidget'; */



const App = () => {
  return (
    <>
      <Navbar/>      
      <ItemCount valInicial={1} stock={10}/>  
      
      <br></br>    
      <br></br>   
      <ItemListContainer/>
    </>
  );
}

export default App;

