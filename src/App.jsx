
import './App.css';
import {Home} from './Home.jsx';
import Movie from './/Movie.jsx';
import Navbar from './Navbar.jsx';
import TvShow from './TvShow.jsx'
import Register from './Register.jsx';
import {Routes,Route, useNavigate, Navigate} from'react-router-dom';	
import Network from './Network.jsx';
import About from './About.jsx';
import People from './People.jsx';
import NotFound from './NotFound.jsx';
import Login from './Login';
import {jwtDecode} from 'jwt-decode';
import FooterComp from './FooterComp.jsx';
import MovieDetails from './MovieDetails.jsx';
import { useEffect, useState } from 'react';
import TvDetails from './TvDetails.jsx';






function App() {

  const [UserData,SetUserData]=useState(null);
let navigator=useNavigate();
  useEffect(()=>{
if(localStorage.getItem('UserToken')){
  GetUsersData();   //refresh
}
  },[])
    function GetUsersData(){
    let encodedToken = localStorage.getItem('UserToken');
    let decodedToken = jwtDecode(encodedToken);
    SetUserData(decodedToken);
    console.log(decodedToken)
  }
  function LogOut(){
    localStorage.removeItem('UserToken');
    SetUserData(null);
    navigator('/login')
  }

  function ProtectedRoute(props){
    if(localStorage.getItem('UserToken')===null){
      return <Navigate to={'/login'}/>
    }
    else{
      return props.children;
    }
  }
  
  return (
    <div className="App">
      
      <Navbar UserData={UserData} LogOut={LogOut}></Navbar>
      <div className=' container-fluid '>

      <Routes>
      <Route path='' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute> }/>
        <Route path='Movies' element={<ProtectedRoute> <Movie/></ProtectedRoute>}>
        </Route>
        <Route path='MovieDetails/:ID' element={ <ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
        <Route path='TVDetails/:ID' element={ <ProtectedRoute><TvDetails/></ProtectedRoute>}/>
        <Route path='TvShow' element={<ProtectedRoute><TvShow/> </ProtectedRoute> }/>
        <Route path='People' element={ <ProtectedRoute>  <People/></ProtectedRoute>}/>
        <Route path='About' element={<ProtectedRoute> <About/> </ProtectedRoute>}/>
        <Route path='Network' element={<ProtectedRoute>  <Network/></ProtectedRoute>}/>
        <Route path='Register' element={ <Register/>}/>
        <Route path='login' element={<Login GetUserData={GetUsersData}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      </div>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
