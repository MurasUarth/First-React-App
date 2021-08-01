import Api from './Api';
import React from 'react';
import Cards from './Cards';
import vector1 from './components/vector1.svg';
import vector2 from './components/vector2.svg';
import vector3 from './components/vector3.svg';

const Course2 = () => {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    Api
      .get("/courses/ac538bbd-97ba-456a-a003-2fa07a32ca6d")
      .then((response) => {

        return setUser(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div class='quadrado'>
      <div className='header'>
        <div className='info'>
          {user?.course}
          <p className='class'>Turma {user?.class}</p>
        </div>
        <div className='teacher'>
          <img src={user?.teacher.avatar} className='teacherimg'></img>
          <p className='teachername'>{user?.teacher.name}</p>
          <p className='responsibleteacher'>Professor responsável</p>
        </div>
      </div>
      <div className='componentes'>
        <div className='retangulo'>
          <p className='numAct'>{user?.overview.nextActivities}</p>
          <p className='nextActivities'>Atividades próximas</p>
          <div className='vector2'>
            <img src={vector2}></img>
          </div>
        </div>
        <div className='retangulo'>
          <p className='numCourses'>{user?.overview.credits}</p>
          <p className='enrolled'>Cursos matriculados</p>
          <div className='vector1'>
            <img src={vector1}></img>
          </div>
        </div>
        <div className='retangulo'>
          <p className='numStud'>{user?.overview.enrolledStudents}</p>
          <p className='onlineStud'>Alunos online</p>
          <div className='vector3' >
            <img src={vector3}></img>
          </div>
        </div>
      </div>
      <h1 className='proximas'>Próximas Atividades</h1>
      <div className='atividades'>
        <Cards cards='1' />
      </div>
    </div>
  )
}
export default Course2;