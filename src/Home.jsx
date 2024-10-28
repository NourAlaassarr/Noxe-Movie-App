import Axios  from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie';
import Avatar from './img/profile.jpeg'
export  function Home() {

  const [Movie, SetTrendingMovie] = useState([]);
  const [tv, SetTrendingTV] = useState([]);
  const [People, SetTrendingPeople] = useState([]);
  const [Loading,setloading]=useState(true);
  async function GetData(MediaType,callback){
    setloading(true);
const {data} = await Axios.get(`https://api.themoviedb.org/3/trending/${MediaType}/day?api_key=0db84d1ec1a837590b28ff0829694543`);
   console.log(data.results)
    callback(data.results.splice(0,10))
    setloading(false);
  }
  useEffect(()=>{
    GetData('movie',SetTrendingMovie);
    GetData('tv',SetTrendingTV);
    GetData('person',SetTrendingPeople);
  },[])
  return (
    <>{!Loading?<div className="row mt-5 m-3">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <div>
        <div className='BorderLine w-25 mb-4'></div>
        <h2 className='h1'>
          Trending <br/>Movies <br/>  To Watch Now </h2>
          <p className=' textM'>Most Watched Movies By Day</p>
        <div className='BorderLine mt-4 w-75 '></div>
        </div>
      </div>
    {Movie.map((movie,i)=>  <div key={i} className="col-md-2 p-3">
      <div className=' d-flex justify-content-center align-items-center'>
      <div className="movie p-3 ">
      <img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt=''/>
      <h2 className='h5 p-2 text-center'>{movie.title}</h2>
      </div></div>
      </div>)}

      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <div>
        <div className='BorderLine w-25 mb-4'></div>
        <h2 className='h1'>
          Trending <br/>TV Shows <br/>  To Watch Now </h2>
          <p className=' textM'>Most Watched Showes By Day</p>
        <div className='BorderLine mt-4 w-75 '></div>
        </div>
      </div>
    {tv.map((TV,i)=>  <div key={i} className="col-md-2 p-3">
      <div className=' d-flex justify-content-center align-items-center'>
      <div className="Tv p-3 ">
      <img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+TV.poster_path} alt=''/>
      <h2 className='h5 p-2 text-center'>{TV.name}</h2>
      </div></div>
      </div>)}

      {/* //people */}
      <div className="col-md-4 d-flex align-items-center justify-content-center mt-5">
        <div>
        <div className='BorderLine w-25 mb-4'></div>
        <h2 className='h1'>
          Top <br/>Treanding <br/>people on TMDB </h2>
          <p className=' textM'></p>
        <div className='BorderLine mt-4 w-75 '></div>
        </div>
      </div>
      {People.map((p,i)=>  <div key={i} className="col-md-2 p-3 mt-5">
      <div className=' d-flex justify-content-center align-items-center'>
      <div className="Person p-3 ">
        {p.profile_path==null?<img src={Avatar}></img> :<img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+p.profile_path} alt=''/>}
      
      <h2 className='h5 my-2 text-center'>{p.name}</h2>
      </div></div>
      </div>)}
    </div>  :<div className=' vh-100 d-flex justify-content-center align-items-center'>
      <i className='fas fa-spinner fa-spin'></i>
      </div> }
      
    </>
  )
}
