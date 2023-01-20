
import React, { useState, useEffect } from 'react'

import Loading from './Loading';
import Error from './Error';
import axios from 'axios';
import Beer from './Beer';
import store from './Store';
import { add } from './Actions';






const url = "https://run.mocky.io/v3/a81dfe45-90ab-4cc1-bb4a-d67a8e3b6ecf";

const ProductsList = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getData = async () => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                setIsLoading(false);

                setItem(res.data)
            })
            .catch((err) => {
                console.log(err)
                setIsError(true);
            })
    }

    useEffect(() => {
        getData();
    }, []);
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }




    const addToCart = (e) => {
        console.log(e);

        store.dispatch(add(e))
        
    }

    const saveNewItem = (e) => {

        setItem([...item, e]);


    }

  

    return (
        <div>
            
            <div className="production-list">
                {
                    item.map((el) => (

                        <Beer key={el.id} beerItem={el} addToCart={addToCart}


                        />

                    ))
                }
            </div>
        </div>
    );
}



export default ProductsList;
