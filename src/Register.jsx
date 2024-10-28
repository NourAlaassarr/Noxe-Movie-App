import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';



export default function Register() {
  const[Error,SetError] = useState('');
  const[ErrorList,SetErrorlist] = useState([]);
  const[Isloading,setLoading] = useState(false);
  const [UserData, SetUserData] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    ConfirmPassword:'',
    Age:0,})
    let Navigation=useNavigate();

function GetUsersData(e){
//deep copy;
let User = {...UserData};
User[e.target.name]=e.target.value;
SetUserData(User);
}
function ValidationRegisteration(){
  const UserSchema=joi.object({
    FirstName:joi.string().required(),
    LastName:joi.string().required(),
    Email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    Password:joi.string().pattern(new RegExp('^[A-Z][a-z]{3,8}$')),
    ConfirmPassword:joi.ref('Password'),
    Age:joi.number().min(18).max(60).required(),
  })
  return UserSchema.validate(UserData,{abortEarly:false})
}

async function SubmitForm(e) {
  
  e.preventDefault();
  setLoading(true);
  let ValidationSchema=ValidationRegisteration();
  if(ValidationSchema.error){
    SetErrorlist(ValidationSchema.error.details);
    setLoading(false);
  }
  else{
    try {
      let response = await Axios.post('http://localhost:5000/User/SignUp', UserData);
      if (response.data.Message === 'Success') {
       Navigation('/login')
      } else {
        SetError(response.data.Message || "An unknown error occurred");
      }
    } catch (error) {
      SetError("An unexpected error occurred. Please try again later.");
    }
    setLoading(false);
  }
  
  }




  return (
    <>
    <div className=' w-75 mx-auto'>
      {ErrorList.map((Error)=><div className='alert alert-danger mb-1 '>{Error.message}</div>)}
      {Error.length>0?<div className='alert alert-danger mb-1 '>{Error}</div>:''}
    <h2 >Registeration Form:</h2>
    <form onSubmit={SubmitForm}>
      <label  htmlFor='FirstName'>FirstName:</label>
      <input onChange={GetUsersData} className='form-control mb-3' type='text' id='FirstName' name='FirstName' placeholder='Enter your First Name....'></input>

      <label  htmlFor='LastName'>LastName:</label>
      <input onChange={GetUsersData} className='form-control mb-3' type='text' id='LastName' name='LastName' placeholder=' Enter your Last Name....'></input>

      <label  htmlFor='Email'>Email:</label>
      <input  onChange={GetUsersData} className='form-control mb-3' type='email' id='Email' name='Email' placeholder=' Enter your Email....'></input>

      <label  htmlFor='Password'>Password:</label>
      <input onChange={GetUsersData} className='form-control mb-3' type='password' id='Password' name='Password' placeholder=' Enter your Password....'></input>

      <label  htmlFor='ConfirmPassword'>ConfirmPassword:</label>
      <input  onChange={GetUsersData} className='form-control' type='password' id='ConfirmPassword' name='ConfirmPassword' placeholder='reEnter your Password.....'></input>

      <label  htmlFor='Age'>Age:</label>
      <input onChange={GetUsersData} className='form-control mb-3' type='number' id='Age' name='Age' placeholder='Enter your Age.....'></input>
      <button  className='btn btn-outline-info p-2'>
      {Isloading ===true?<i className="fas fa-spinner fa-spin"></i>:'Register'}</button>
    </form>
    </div>
    </>
  )
}
