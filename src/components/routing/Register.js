import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {hashSync} from 'bcryptjs'

function Register() {
  let { register, handleSubmit,formState:{errors}} = useForm();//3rd party action after clicking submit
  let navigate = useNavigate();
  let [error, setError] = useState("");//errors-form validation,error,setError-network errors

  async function onUserRegister(userObj) {
    try {
      //search for duplicate user
      let res1 = await axios.get(
        `http://localhost:4000/users?username=${userObj.username}`
      );
      let usersList = res1.data;
      //if usersList is empty, it means no user existed with same username
      if (usersList.length === 0) {
        //hash the password
        let hashedPassword=hashSync(userObj.password,5)
        //replace plain password with hashed password
        userObj.password=hashedPassword;
        //1.store in local api
        let res = await axios.post("http://localhost:4000/users", userObj);
        if (res.status === 201) {
          //navigate to Login component
          navigate("/login");
        }
      }
      //a user already exsted in API 
      else {
        setError("User already existed!");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      {error.length !== 0 && (<p className="fs-1 text-center text-danger">{error}</p>)}
      <form className="w-50 mx-auto form-bg bg-light mb-3 p-3 mt-3" onSubmit={handleSubmit(onUserRegister)}>  
        <h1 className="display-3 text-center text-white"><b>AgriProfile</b> </h1>
        <table className="mx-auto mt-3">
        {/* username */}
        <tr>
          <td><label htmlFor="username" id='username' className="form-label">Username</label></td>
          <td><input type="text" {...register("username",{required:"* Username is Required"})} className="form-control " autoComplete="off"/></td>
          {errors.username && <b className="text-danger ms-3">{errors.username.message}</b>}
        </tr>

        {/* password */}
        <tr>
          <td><label htmlFor="password" id='password' className="form-label">Create Password</label></td>
          <td><input type="password" {...register("password",{required:"* Password is Required"})} className="form-control " autoComplete="off"/></td>
          {errors.password && <b className="text-danger ms-3">{errors.password.message}</b>}
        </tr>

        {/* email */}
        <tr>
          <td><label htmlFor="email" id='email' className="form-label">Email</label></td>
          <td><input type="email" {...register("email",{required:"* Email is Required"})} className="form-control " autoComplete="off"/></td>
          {errors.email && <b className="text-danger ms-3">{errors.email.message}</b>}
        </tr>

        <tr>
          <td><label htmlFor="phno" id='phno' className="form-label">Phone Number</label></td>
          <td><input type="tel" {...register("phno",{required:"* Ph.no is Required"})} className="form-control " autoComplete="off"/></td>
          {errors.phno && <b className="text-danger ms-3">{errors.phno.message}</b>}
        </tr>
        

        
      <tr>
        <td><button className="btn btn-primary d-block mx-auto">Register</button></td>
      </tr>
      </table>

      </form>
    </div>
  );
}

export default Register;