import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorCards = actors.map(actor=>
    <div className="actor">
      <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
      <ul>
        {actor.movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  )
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorCards}
    </div>
  );
};

export default Actors;
