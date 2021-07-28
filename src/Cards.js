import React from 'react'
import Api from './Api'

const Cards = ({ cards }) => {

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    Api
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
      <img className='card' src={user?.nextActivities[cards].image}></img>
      <p className='a'>{user?.nextActivities[cards].course}</p>
      <p className='b'>{user?.nextActivities[cards].title}</p>
      <p className='c'>{user?.nextActivities[cards].deadline}</p>
    </div>
  )
}

export default Cards
