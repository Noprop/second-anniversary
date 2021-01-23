import React from 'react';
import shuffle from '../pics/shuffle.svg';

const Locations = () => {
  return (
    <section className="locations">
      <h2>Locations</h2>
      <div className="selections">
        <button className="category">My House</button>
        <button className="category">Your House</button>
        <button className="category">Cottage</button>
        <button className="category">The World</button>
      </div>
      <button className="random"></button>
    </section>
  )
}

export default Locations;