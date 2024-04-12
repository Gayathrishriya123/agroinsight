import React from 'react';
import {useLocation} from 'react-router-dom';

 
function Solution() {

  let {state}=useLocation();
  let {solution,soilType,season,waterLevel,surfaceArea} = state;

  return (
    <div className='container mt-4'>
    
    <div  className='card mx-auto w-50 mt-5 p-2' style={{width:"500px"}}>
      <h2 className='text-white'>Soulitons</h2>
      
      <p><b>Selected Soil:</b>  {soilType}</p>
      <p><b>Selected Season: </b> {season}</p>
      <p><b>Selected waterLevel:</b> {waterLevel}</p>
      <p><b>Selected surfaceArea:</b> {surfaceArea}</p>
      <br></br>
      {solution && (
      <>
      <h4 className='text-white'>As a Farmer Buddy , I Suggest You...</h4>
      <p>{solution}</p>
      </>)}
      
      </div>
  
    </div>
   
  );
};
export default Solution;