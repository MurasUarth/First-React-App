import Api from './Api';
import React from 'react';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import vector1 from './components/vector1.svg';
import vector2 from './components/vector2.svg';
import vector3 from './components/vector3.svg';


const Dashboard = () => {
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
    <div class='quadrado'>
      <h1 className='resumo'>Resumo</h1>
      <div className='componentes'>
        <div className='retangulo'>
          <p className='numCourses'>{user?.overview.enrolledCourses}</p>
          <p className='enrolled'>Cursos matriculados</p>
          <div className='vector1'>
            <img src={vector1}></img>
          </div>
        </div>
        <div className='retangulo'>
          <p className='numAct'>{user?.overview.nextActivities}</p>
          <p className='nextActivities'>Atividades próximas</p>
          <div className='vector2'>
            <img src={vector2}></img>
          </div>
        </div>
        <div className='retangulo'>
          <p className='numStud'>{user?.overview.onlineStudents}</p>
          <p className='onlineStud'>Alunos online</p>
          <div className='vector3' >
            <img src={vector3}></img>
          </div>
        </div>
      </div>
      <h1 className='proximas'>Próximas Atividades</h1>
      <div className='atividades'>
        <Link to='/course1' className='card'><Cards cards='0' /></Link>
        <Cards cards='1' />
        <Cards cards='1' />
      </div>
    </div>
  )
}
export default Dashboard;