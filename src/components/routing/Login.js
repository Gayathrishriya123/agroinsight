import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { userLoginContext } from "../../contexts/userLoginContext";//consuming
import { useNavigate } from "react-router-dom";

function Login() {
  let { register, handleSubmit,formState:{errors} } = useForm();
  let navigate = useNavigate();
  let [
    ,
    ,
    userLoginStatus,
    ,
    error,
    onUserLogin,
  ] = useContext(userLoginContext);

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/agridetails");
    }
  },[userLoginStatus,navigate]);

  console.log(userLoginStatus);
  return (
    <div>
      
      <form className="w-50 text-dark mx-auto login-bg bg-success p-3 mt-5" onSubmit={handleSubmit(onUserLogin)}>
        <h1 className="display-3 text-center text-white"><b>User Login</b> </h1>

        {error.length!==0&&<p className="fs-2 text-center text-danger">{error}</p>}{/*to display invalid username/password*/}
        <table className="mx-auto mt-4">
        
        
        {/* username */}
        <tr>
          <td><label htmlFor="username" name='username' className="form-label">Username</label></td>
          <td><input type="text" {...register("username",{required:"* Please enter Username"})} className="form-control " autoComplete="off"/></td>
          {errors.username && <b className="text-danger ms-3">{errors.username.message}</b>}
        </tr>

        {/* password */}
        <tr>
          <td><label htmlFor="password" name='password' className="form-label">Password</label></td>
          <td><input type="password" {...register("password",{required:"* Please enter Password"})} className="form-control" autoComplete="off"/></td>
          {errors.password && <b className="text-danger ms-3">{errors.password.message}</b>}
        </tr>

       <tr className="mx-auto">
        <td><button className="btn btn-primary d-block mx-auto">Login</button></td>
        </tr>
        </table>
      </form>
    </div>
  );
}

export default Login;