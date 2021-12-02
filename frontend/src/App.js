import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Permits from './components/Permits';
import Permissons from './components/Permissons';
import CardDash from './components/dashboard/cardDash';
import OneInformation from './components/dashboard/OneInformation';
import Main from './components/main/Main';
import Alert from './components/Alert'
import NomMach from './components/NoMach'
import Notifacations from './components/Notifacations';
import Organ from './components/Organ';
import Register from './components/Register';
const App = () => {
	return <div className="App">

	
	 <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/cardDash" element={<CardDash />} />
		<Route path="/OneInformation/:name" element={<OneInformation />}></Route>
		<Route path="/permits" element={<Permits/>} ></Route>
		<Route path="/permissons" element={<Permissons/>} />
		<Route path="/alert" element={<Alert/>} />
		<Route path="/notifacations" element={<Notifacations/>} />
<Route path="/organ" element={<Organ/>} />


		<Route path="*" element={<NomMach replace to="/404" />} />
		<Route path="/Register" element={<Register/>} />
       
      </Routes>



	</div>;

};

export default App;
  