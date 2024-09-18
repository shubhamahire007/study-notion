import { useState } from "react"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.css';

export default function LoginForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({email:"", password:""})
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={submitHandler} className="login">

            <label>
                <p className="mail">
                    Email address<sup className="star">*</sup>
                </p>
                <input 
                    type="email"
                    required
                    value={formData.email}
                    name="email" 
                    onChange={changeHandler}
                    placeholder="Enter email "
                    className="input"
                />
            </label>

            <label className="pass">
                
                <p className="mail">
                    Password<sup className="star">*</sup>
                </p>

                <input 
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    name="password" 
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    className="input"
                />

                <span className="eye" onClick={()=> setShowPassword((preVal) => !preVal)} >
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to="#">
                    <p className="forget">Forgot Password </p>
                </Link>
            </label>

            <button className="signBtn">Sign in </button>
        </form>
    )
}