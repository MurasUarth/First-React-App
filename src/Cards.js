import React from 'react'
import api from './api';

const Cards = (cards) => {

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    api
      .get("/user")
      .then((response) => {

        return setUser(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div className='tarefa'>
      <img className='card' src={user?.nextActivities[cards.card].image}></img>
      <p className='a'>{user?.nextActivities[cards.card].course}</p>
      <p className='b'>{user?.nextActivities[cards.card].title}</p>
      <p className='c'>{user?.nextActivities[cards.card].deadline}</p>
    </div>
  )
}

export default Cards
