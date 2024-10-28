import  Axios  from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TvDetails() {
    let { ID } =useParams();
    const [MovieData,setmoviedata]=useState([])
    
    async function getData(ID){
        let response = await Axios.get(`https://api.themoviedb.org/3/tv/${ID}?api_key=0db84d1ec1a837590b28ff0829694543`);
        setmoviedata(response.data);
    
    }

    useEffect(()=>{
        getData(ID);
       
    },[]);
  return (
    <>
      {MovieData?
      <div className="row mt-4 p-4">
        <div className="col-md-3 ">
            <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+MovieData.poster_path} alt=""/>
            <h2 className='text-center p-3'>{MovieData.title}</h2>
        </div>
        <div className="col-md-9 mt-3">
            <h3 className=' text-center h4'>Description: {MovieData.overview}</h3>
            <h3 className='p-2 h5'>Rating: {MovieData.vote_average}</h3>
            <h5 className='text-center p-2 d-flex align-items-center'>
  Genres: {Array.isArray(MovieData.genres) && MovieData.genres.length > 0
    ? MovieData.genres.map((genre, i) => (
        <span className='p-2' key={i}>{genre.name}</span>
      ))
    : <span className='p-2'>{MovieData.genre?.name}</span>}
</h5>
            <h5 className='p-2'>release_date: {MovieData.release_date}</h5>
            
        </div>
      </div>

      :<div className=' vh-100 d-flex justify-content-center align-items-center'>
      <i className='fas fa-spinner fa-spin'></i>
      </div>}
      
    </>
  )
}
