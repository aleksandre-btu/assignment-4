import React, { useEffect } from 'react';
import useBackend from '../hooks/useBackend';
import classes from '../css/cards.module.css';

const Users = () => {
  const { data } = useBackend('users');
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div>
      {data && data.length > 0
        ? data.map(res => {
            return (
              <div className={classes.Wrapper} key={res.id}>
                <h1>{res.email}</h1>
                <h2>{res.first_name}</h2>
                <h2>{res.last_name}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Users;
