import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Movie() {
  const [Movies,SetAllMovies]=useState([]);
  const [Loading,setloading]=useState(true);
  let nums = new Array(13).fill(1).map((v,i)=>i+1)
  async function GetData(pagenumber){
    setloading(true);
    const {data} = await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0db84d1ec1a837590b28ff0829694543&include_adult=false&include_video=false&language=en-US&page=${pagenumber}&sort_by=popularity.desc`);
      SetAllMovies(data.results);
      setloading(false);

      }
      useEffect(()=>{
        GetData(1);
      },[])



// console.log(nums)

  return (
    <>
      
      {!Loading?<div className="row mt-5 m-3 justify-content-center">
      {Movies.map((movie,i)=>  <div key={i} className="col-md-2 p-3">
        <div className=' d-flex justify-content-center align-items-center'>
       <Link to={`/MovieDetails/${movie.id}`} className=' text-decoration-none text-white'>
       <div className="movie p-3 ">
        <img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt=''/>
        <h2 className='h5 p-2 text-center'>{movie.title}</h2>
        </div></Link>
        
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
