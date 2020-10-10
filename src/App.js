import React, { useState } from 'react';

import './App.css';
//import axios from 'axios';
import { useEffect } from 'react';
import Receipe from './Receipe';

//const API_URL = 'http://starlord.hackerearth.com/recipe';

function App() {
  const [receipies, setReceipies] = useState([
    {
      "id": 0,
      "name": "Uthappizza",
      "image": "https://i.imgur.com/tDnjTXf.jpg",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza"
    },
    {
      "id": 1,
      "name": "Zucchipakoda",
      "image": "https://i.imgur.com/xkUElXq.jpg",
      "category": "appetizer",
      "label": "",
      "price": "1.99",
      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
    },
    {
      "id": 2,
      "name": "Vadonut",
      "image": "https://i.imgur.com/anUAlqF.jpg",
      "category": "appetizer",
      "label": "New",
      "price": "1.99",
      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
    },
    {
      "id": 3,
      "name": "ElaiCheese Cake",
      "image": "https://i.imgur.com/c5hBTEW.jpg",
      "category": "dessert",
      "label": "",
      "price": "2.99",
      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
    },
    {
      "id": 4,
      "name": "Guntur chillies",
      "image": "https://i.imgur.com/Vc9JIXP.jpg",
      "category": "appetizer",
      "label": "Spicy",
      "price": "0.99",
      "description": "Assorted chillies from Guntur"
    },
    {
      "id": 5,
      "name": "Buffalo Paneer",
      "image": "https://i.imgur.com/pH2tkgk.jpg",
      "category": "appetizer",
      "label": "",
      "price": "5.99",
      "description": "A special type of Paneer made from Buffalo milk"
    },
    {
      "id": 6,
      "name": "Cherry Tomatoes",
      "image": "https://i.imgur.com/fRy8hjE.jpg",
      "category": "clone",
      "label": "clone",
      "price": "9.99",
      "description": "clone of cherry and tomato"
    },
    {
      "id": 7,
      "name": "Goat Milk",
      "image": "https://i.imgur.com/zFGPhrI.jpg",
      "category": "weird",
      "label": "weird",
      "price": "1.99",
      "description": "Medicinal Goat Milk"
    },
    {
      "id": 8,
      "name": "Rose breasted Grosbeak chicken",
      "image": "https://i.imgur.com/RYsqgoo.jpg",
      "category": "appetizer",
      "label": "New",
      "price": "7.99",
      "description": "Roasted rare bird"
    },
    {
      "id": 9,
      "name": "Toenail Zingy",
      "image": "https://i.imgur.com/IpG3YOT.jpg",
      "category": "appetizer",
      "label": "weird",
      "price": "0.99",
      "description": "Cooked Toenails of various animals"
    }
  ]);
  const [receipeName, setReceipeName] = useState("");

  useEffect(() => {
    async function getReceipies() {
      //const res = await axios.get(API_URL);
      //setReceipies(res.data);
      localStorage.setItem('receipeData', JSON.stringify(receipies));
    }
    getReceipies();
  }, [receipies]);

  const getReceipe = (e) => {
    e.preventDefault();
    const receipies = JSON.parse(localStorage.getItem('receipeData'));
    const receipeSearched = [];
    receipies.map(receipe => (
      receipe.name.toLowerCase().includes(receipeName.toLocaleLowerCase()) ?
        receipeSearched.push(receipe)
        : ""
    ));
    setReceipies(receipeSearched);
  }
  return (
    <div className="App">
      <img className="app__img1" src="/images/Illustration2.png" alt="illustrations2" />
      <img className="app__img2" src="/images/Illustration3.png" alt="illustrations3" />
      <img className="app__img3" src="/images//Illustration5.png" alt="illustrations5" />
      <img className="app__img4" src="/images//Illustration4.png" alt="illustrations4" />
      <img className="app__img5" src="/images//Illustration1.png" alt="illustrations1" />
      <form className="search__input" onSubmit={getReceipe}>
        <button className="app__search-btn" onClick={getReceipe}><img className="app__search-icon" src="/images/Iconfeather-search.png" alt="Search" /></button>
        <input type="text" className="receipe__name" value={receipeName} onChange={(e) => setReceipeName(e.target.value)} placeholder="Search your favourite recipe" />
      </form>
      <div className="food-intro">
        <h4>Category</h4>
        <h1>Pizzas and Noodles</h1>
      </div>
      <div className="container">
        {
          receipies.map((receipe, index) => (

            <Receipe key={receipe.id}
              receipe={receipe} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
