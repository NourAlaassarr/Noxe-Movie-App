import  Axios  from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import joi from 'joi';
export default function Login(props) {
const [User,SetUserData]=useState({
  Email:'',
  Password:'',
});
const[isLoading,setLoading]=useState(false);
const[Errorlist,SetErrorlist]=useState([]);
const[Error,SetError] = useState('');

let Navigation=useNavigate();
function GetUsersData(e){
  //deep copy
  let UserData={...User};
  UserData[e.target.name]=e.target.value;
  SetUserData(UserData);
}
function ValidationLogInForm (){

  const SignInScheme=joi.object({
    Email:joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    Password: joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  })
  return SignInScheme.validate(User,{abortEarly:false})
}
  async function SignInSubmit(e){
    e.preventDefault();
    setLoading(true);
    let validationResults= ValidationLogInForm();
    console.log(validationResults)
    if(validationResults.error){
      SetErrorlist(validationResults.error.details);
      setLoading(false);
    }
    else{
      let {data} = await Axios.post('http://localhost:5000/User/SignIn',User);
      if (data.Message === 'Success') {
        const Token =data.Data.Token;
  
        localStorage.setItem('UserToken',Token);
        props.GetUserData();
        Navigation('/home')
      }
      else{
        SetError( data.Message);
      }
      console.log( data)
    }
    }
    
  return (
    <div className=' w-75 mx-auto'>
      {Errorlist.map((Error)=>Error.context.key==='Password'?<div className='alert alert-danger mb-1'>Invalid credentials</div>:<div className='alert alert-danger mb-1 '>{Error.message}</div>)}
      {Error.length?<div className='alert alert-danger mb-1 '>{Error}</div>:''}
    <h2 >Log in Form:</h2>
  <form onSubmit={SignInSubmit}>
    <label  htmlFor='Email'>Email:</label>
    <input  onChange={GetUsersData} className='form-control mb-3' type='email' id='Email' name='Email' placeholder=' Enter your Email....'></input>

    <label  htmlFor='Password'>Password:</label>
    <input onChange={GetUsersData} className='form-control mb-3' type='password' id='Password' name='Password' placeholder=' Enter your Password....'></input>

    
    <button  className='btn btn-outline-info p-2'>
      {isLoading ===true?<i className="fas fa-spinner fa-spin"></i>:'Login'}</button>
  </form>
  </div>
  )
}
