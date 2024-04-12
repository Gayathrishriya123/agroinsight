import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';//bootstrap 
 

function Agridetails() {
  const [cropGrown, setCropGrown] = useState('');
  const [address, setAddress] = useState('');
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [waterLevel, setWaterLevel] = useState('');
  const [surfaceArea, setSurfaceArea] = useState('');
  const [agriSolutions, setAgriSolutions] = useState({ solutions: {} });
  const [showModal, setShowModal] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const navigate = useNavigate();
 
  useEffect(() => {
    let fetchData = async () => {
      try {
      let response = await axios.get('http://localhost:4000/agrisolutions');
        setAgriSolutions(response.data);
      } catch (error) {
        console.error('Error fetching agrisolutions:', error.message);
      }
    };
    fetchData();
  }, []);
 
  let constructKey = () => {
    return `${soilType}_${season}_${waterLevel}_${surfaceArea}`.toLowerCase();
  };
 
  function handleButtonClick() {
    setPreviewData({
      cropGrown,
      address,
      soilType,
      season,
      waterLevel,
      surfaceArea,
    });

    if (!cropGrown || !address || !soilType || !season || !waterLevel || !surfaceArea) {
      alert('Please fill in all the form fields before submitting.');
      return;
    }
 
    setShowModal(true);
  }
  

  
  const handleEdit = () => {
    setShowModal(false);
    // Navigate back to the form
    navigate('/agridetails');
  };
 
  const handleSubmitInModal = () => {
    navigate('/solution', {
      state: {
        solution: agriSolutions[0]?.solutions[constructKey()] || 'Sorry! no solution found',
        soilType,
        season,
        waterLevel,
        surfaceArea,
      },
    });
 
    setShowModal(false);
  };
 
  return (
    <>
      <form className='w-50 mx-auto form-bg bg-light mb-3 p-3 mt-3 bg-light mt-3 '>

        <h1 className='text-center text-white'>AgriDetails</h1>
        
        <div className='d-flex flex-column'>
        <label>Crops Grown:</label> &ensp;
        <textarea cols="10" value={cropGrown} onChange={(e) => setCropGrown(e.target.value)}/>
        <br></br>
        <br></br>
        <label>Address:</label> &ensp;
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        <br></br>
        <br></br>
      </div>
      
      <div>
        <label>Soil Type:</label> &ensp;<br></br>
        <select value={soilType} onChange={(e) => setSoilType(e.target.value)} style={{width:"150px"}}>
          <option value='select'>--Select--</option>
          <option value='red'>Red</option>
          <option value='black'>Black</option>
          <option value='alluvial'>Alluvial</option>
          <option value='laterite'>Laterite</option>
        </select>
        <br></br>
        <br></br>
        <label>Season:</label> &ensp;<br></br>
        <select value={season} onChange={(e) => setSeason(e.target.value)} style={{width:"150px"}}>
          <option value='select'>--Select--</option>
          <option value='summer'>Summer(March-June)</option>
          <option value='monsoon'>Monsoon(July-September)</option>
          <option value='post_monsoon'>Post-monsoon(October-December)</option>
          <option value='winter'>Winter(January-February)</option>
        </select>
        <br></br>
        <br></br>
 
        <label>Water Level:</label> &ensp;<br></br>
        <select value={waterLevel} onChange={(e) => setWaterLevel(e.target.value)} style={{width:"150px"}}>
          <option value='select'>--Select--</option>
          <option value='below_900'>Below_900ppm</option>
          <option value='above_900'>Above_900ppm</option>
        </select>
        <br></br>
        <br></br>
 
        <label>Surface Area:</label> &ensp;<br></br>
        <select value={surfaceArea} onChange={(e) => setSurfaceArea(e.target.value)} style={{width:"150px"}}>
          <option value='select'>--Select--</option>
          <option value='flat'>Flat</option>
          <option value='hillside'>Hillside</option>
        </select>
        <br></br>
        <br></br>
        </div>

        <button type='button' className='btn btn-primary' onClick={handleButtonClick}>
          Preview
        </button>
      </form>
 
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Crops Grown: {previewData.cropGrown}</p>
          <p>Address: {previewData.address}</p>
          <p>Soil Type: {previewData.soilType}</p>
          <p>Season: {previewData.season}</p>
          <p>Water Level: {previewData.waterLevel}</p>
          <p>Surface Area: {previewData.surfaceArea}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleEdit}>
            Edit
          </Button>
          <Button variant='primary' onClick={handleSubmitInModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default Agridetails