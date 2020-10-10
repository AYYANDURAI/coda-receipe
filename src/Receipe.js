import React from 'react';
import { Link } from 'react-router-dom'
import './Receipe.css';

function Receipe({ receipe }) {

    return (
        <div className="receipe__card" >
            <div className="receipe__hovered__div">
                <button><Link to={{ pathname: `/receipe/${receipe.id}`, state: { receipe } }}>VIEW MORE</Link></button>
                <button>QUICK VIEW</button>
            </div>
            <img className="receipe__img" src={receipe.image} alt={receipe.name} style={{ width: '100%', height: '70%', objectFit: 'cover', zIndex: -1 }} />
            <div className={receipe.id % 2 === 1 ? 'receipe__details' : 'receipe__details__white'}>
                <button className="receipe__button">In Pizzas</button>
                <img className="receipe__heart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="heart" />
                <h2 className="receipe__title">{receipe.name}</h2>
                <div className="receipe__time">
                    <img className="receipe__clock" src="https://image.flaticon.com/icons/svg/860/860806.svg" alt="heart" style={receipe.id % 2 === 1 ? { filter: 'invert(1)' } : { color: 'white' }} />
                    <h3 className="receipe__min">24 mins</h3>
                </div>
                <p className="receipe__des">{receipe.description}</p>
            </div>
            <div className={receipe.id % 2 === 1 ? 'receipe__fadeBottom' : 'receipe__fadeBottom__white'}></div>
        </div >
    )
}

export default Receipe
