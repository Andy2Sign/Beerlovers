import React from 'react';
import Available from './Available';
import store from './Store';
import { add, addOne, removeOne } from './Actions';
import {HiShoppingCart} from 'react-icons/hi';
import './beer.css';


const Beer = ({ beerItem}) => {
     
    const beerBoxStyle = {
            borderRadius: '20px',
            padding: '15px',
            width: '250px',
            margin: '30px',
            borderColor:'#1e1e1e',
            border: '1px solid',
            boxShadow: '4px 8px 20px 7px #3B0C17'
          
    }

    
   const createObj = () => {
       //let obj = {nome: beerItem.nome, prezzo: prezzo, disponibilità: disponibilità, img: img}
      
     //store.dispatch(add(obj));

     

     if(store.getState()){
         let find = store.getState().items.find(x=> x.id === beerItem.id);
         console.log(find);
         if(find !== undefined){
             store.dispatch(addOne(beerItem.id, 1 ))
         }
        }
        else{
            store.dispatch(add(beerItem));
        }

   }

   const iconStyle = {fontSize: '20px'}
   
 
     
     
    
    return (
        <div style={beerBoxStyle}>
            <ul className="beer-list">
                <li> nome: {beerItem.nome}</li>
                <li> prezzo: {beerItem.prezzo}</li>
                <li> disponibilità: {beerItem.disponibilità ? <span>OK</span> :  <Available/>}</li>
                <img className="img-beer" alt="" src={beerItem.img} />
                <div className="btn-cont">
                <button className="btn-addToCart" onClick={createObj}> Add to Cart
                <HiShoppingCart style={iconStyle}/>
                </button>
                </div>
            </ul>
        </div>
    );
}





export default Beer;
