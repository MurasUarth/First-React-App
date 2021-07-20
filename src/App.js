import './App.css';
import api from './api';
import React from 'react';
import Cards from './Cards';
import vector1 from './images/vector1.svg';
import vector2 from './images/vector2.svg';
import vector3 from './images/vector3.svg';
import logouticon from './images/logouticon.svg';

function App() {
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
    <>
      <div className='sidebar'>
        <div className='avatar'>
          <img className='person' src={user?.avatar}></img>
          <p className='name'>{user?.name}</p>
          <p className='course'>{user?.course}</p>
        </div>
        <div className='menu'>
          <p className='dashboard'>Dashboard</p>
          <p className='courses'>Meus Cursos</p>
          <div className='logout'>
            <img className='logouticon' src={logouticon}></img>
            <p>Logout</p>
          </div>
        </div>
      </div>
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
          <Cards card='0' />
          <Cards card='1' />
        </div>
      </div>
    </>
  );
}

export default App;