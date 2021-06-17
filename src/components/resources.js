import React from 'react';
import useBackend from '../hooks/useBackend';
import classes from '../css/cards.module.css';

const resources = () => {
  const { data } = useBackend('resources');
  return (
    <div>
      {data && data.length > 0
        ? data.map(res => {
            return (
              <div className={classes.Wrapper} key={res.id}>
                <h1>{res.name}</h1>
                <h2>{res.year}</h2>
                <h2>{res.pantone_value}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default resources;
