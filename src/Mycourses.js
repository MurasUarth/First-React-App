import React from 'react'
import Api from './Api'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';

const Mycourses = () => {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    Api
      .get("/courses/d400135c-bff7-4a7c-baf7-9c9a064ed94f")
      .then((response) => {

        return setUser(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [user2, setUser2] = React.useState();
  React.useEffect(() => {
    Api
      .get("/courses/ac538bbd-97ba-456a-a003-2fa07a32ca6d")
      .then((response) => {

        return setUser2(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className='quadrado'>
      <h1 className='meuscursos'>Meus Cursos</h1>
      <div className='atividades'>
        <Link to='/course1' className='card'>
          <div className='tarefa'>
            <img className='card' src={user?.image}></img>
            <p className='a'>{user?.type}</p>
            <p className='b'>{user?.course}</p>
            <p className='c'>{user?.class}</p>
          </div>
        </Link>
        <Link to='/course2' className='card'>
          <div className='tarefa'>
            <img className='card' src={user2?.image}></img>
            <p className='a'>{user2?.type}</p>
            <p className='b'>{user2?.course}</p>
            <p className='c'>{user2?.class}</p>
          </div>
        </Link>
        <div className='tarefa'>
          <img className='card' src={user2?.image}></img>
          <p className='a'>{user2?.type}</p>
          <p className='b'>{user2?.course}</p>
          <p className='c'>{user2?.class}</p>
        </div>
      </div>
    </div>
  )
}
export default Mycourses;