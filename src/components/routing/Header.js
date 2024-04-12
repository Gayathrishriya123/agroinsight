import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';

function Header() {

  let [,setCurrentUser,userLoginStatus,setUserLoginStatus]=useContext(userLoginContext);
  
  function userLogout(){
    setCurrentUser({})
    setUserLoginStatus(false)
  }

  return (

////////////////////////////////////////////////////////
  <nav className="navbar navbar-expand-md bg-success">
  <div className="container-fluid">
    <a className="navbar-brand d-flex" href="http://localhost:3000">
      <img className='me-3'
        src="logo2.png"
        height="90"
        width="90"
        alt="MDB Logo"
        style={{maxWidth:'100%',height:'auto'}}
      /><p className='text-center text-white mt-4 ms-1 fs-7'>Empowering Farmers with <br></br>Comprehensive Crop Solutions</p>
    </a> 
     
    
    <div className='justify-content-end ' id="#navbarNav">
    <ul className="nav nav-pills justify-content-end  p-3">

    {userLoginStatus===false?
    <>
    <li className="nav-item">
    <NavLink className="nav-link text-white" to="">
      Home
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link text-white" to="register">
      Register
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link text-white" to="login">
      Login
    </NavLink>
  </li>
  </>:
  <>
   <li className="nav-item">
    <NavLink className="nav-link text-white" to="agridetails">
     FarmFolio
    </NavLink>
    </li>

   <li className="nav-item" onClick={userLogout}>
    <NavLink className="nav-link text-white" to="login">
      Logout
    </NavLink>
  </li>
  </>}
</ul>
</div>
   
  </div>
</nav>

///////////////////////////////////////////////
 

  )
}

export default Header