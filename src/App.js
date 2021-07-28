import './App.css';
import React from 'react'
import Api from './Api'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import logouticon from './components/logouticon.svg';
import Dashboard from './Dashboard';
import Mycourses from './Mycourses'
import Course1 from './Course1'

function App() {
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
    <>
      <Router>
        <div className='sidebar'>
          <div className='avatar'>
            <img className='person' src={user?.avatar}></img>
            <p className='name'>{user?.name}</p>
            <p className='course'>{user?.course}</p>
          </div>
          <div className='menu'>
            <Link to='/' className='dashboard'>Dashboard</Link>
            <Link to='/mycourses' className='mycourses'>Meus Cursos</Link>
            <div className='logout'>
              <img className='logouticon' src={logouticon}></img>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <Route path='/' exact component={Dashboard} />
        <Route path='/mycourses' component={Mycourses} />
        <Route path='/course1' component={Course1} />
      </Router>
    </>
  );
}

export default App;