import React, { useState, useEffect } from 'react';
import MyCart from './components/MyCart.js';
import ProductsList from './components/ProductsList.js';
import Nav from './components/Nav.js';
import store from './components/Store.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import BeersHome from './BeersHome.js';
import Loading from './components/Loading.js';
import Error from './components/Error.js';
import Blog from './components/Blog.js';

function App() {

store.subscribe(() => { });
return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Nav />
          <Routes>
            <Route path="/" exact element={<SearchField />} />
            <Route path="/components/ProductsList" element={<ProductsList />} />
            <Route path="/components/MyCart" element={<MyCart />} />
            <Route path="/components/Blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


const homeUrl = "https://run.mocky.io/v3/a339ed1a-5fae-4e33-b4cf-334faa057532";

const SearchField = () => {
  const [beerCard, setBeerCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getBeers = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(homeUrl);
      setBeerCard(res.data);

    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  useEffect(() => {
    getBeers();
  }, []);

  if(isLoading){
    <Loading/>
  }
  if(isError){
    <Error/>
  }


  return (
    <div>
      <h1>Welcome to the Beer Shopping Portal</h1>
      <div className='main-beersCard'>

        {
          beerCard.map((el, index) => (
            <BeersHome key={index} {...el} />
          ))
        }
      </div>

    </div>

  )

}

export default App;


