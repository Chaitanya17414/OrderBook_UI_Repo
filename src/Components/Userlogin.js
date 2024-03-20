
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { FaRegUserCircle,FaUnlockAlt  } from "react-icons/fa"

 
function UserLogin() {

  const navigate = useNavigate();
  const [loginId, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };

  const handleLogin = (selectVal) => {
    // Create a request body with the username and password
    const requestBody = {
      loginId: loginId,
      password: password,
    };
    let loginJson= JSON.stringify(requestBody)
    localStorage.setItem("LoginJSON",loginJson);
    
    fetch("http://localhost:8080/login?requiredRole="+selectVal.toLowerCase(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.ok) {
        // Handle successful login
        setError("Login Successful!!");
        setTimeout(() => {
          navigate("/referencedata");
        }, 1000);
      } else {
        // Handle login failure
        setError("Please enter a valid Credentials");
      }
    });
  };
  return (

    <div className='App'>
        <div className='bg-overlay'>
            <div className='loginContainer'>

                <h1>Welcome!</h1>

                <div className='input-container'>

                  <label>Login ID </label>
                  <div>
                    <span className="login-icons"><FaRegUserCircle /></span>
                     <input type='text' value={loginId}

                      onChange={(e) => setLoginID(e.target.value)} />
                  </div>

                </div>

                  <div className='input-container'>

                    <label>Password </label>
                    <div>
                      <span className="login-icons"><FaUnlockAlt /></span>
                       <input type='password' value={password}

                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                  </div>
                <div className="dropdown input-container">
                  <label>Login as</label>
                    <select onChange={handleChange} >
                        <option value="">Select Login type</option>
                        <option value="Admin">Admin</option>
                        <option value="PM">Program Manager </option>
                    </select>
                </div>


                <button className='loginBut' onClick={()=>handleLogin(value)}><p>Login</p></button>

                {error && (<p>{error}</p>)}


                </div>

        </div>

      
     </div>

  );

}

 

export default UserLogin