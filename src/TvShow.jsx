
import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Darkmode from 'darkmode-js';


export default function TvShow() {



  const [TV,SetALLTV]=useState([]);
  const [Loading,setloading]=useState(true);


  async function GetData(pagenumber){
    setloading(true);
    const {data} = await Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=0db84d1ec1a837590b28ff0829694543&include_adult=false&include_video=false&language=en-US&page=${pagenumber}&sort_by=popularity.desc`);
    SetALLTV(data.results)
    setloading(false);
      }
      useEffect(()=>{
        GetData(1);
      },[])

      let nums = new Array(13).fill(1).map((v,i)=>i+1)


  return (
    <>
      
      {!Loading?<div className="row mt-5 m-3 justify-content-center">
      {TV.map((Tv,i)=>  <div key={i} className="col-md-2 p-3">
        <div className=' d-flex justify-content-center align-items-center'>

        <Link to={`/TVDetails/${Tv.id}`} className=' text-decoration-none text-white'>
        <div className="movie p-3 ">
        <img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+Tv.poster_path} alt=''/>
        <h2 className='h5 p-2 text-center'>{Tv.name}</h2>
        </div>
        </Link>
        </div>
        </div>)}
    </div>:<div className=' vh-100 d-flex justify-content-center align-items-center'>
      <i className='fas fa-spinner fa-spin'></i>
      </div>}
      <nav aria-label="..."className=' py-5'>
  <ul className="pagination pagination-lg d-flex justify-content-center">
    {
      nums.map((element)=><li onClick={()=>GetData(element)} key={element} className="page-item pagination-page "><a className="page-link bg-transparent text-white">{element}</a></li>)
    }
    
  </ul>
</nav>
    </>
  )
}

