import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignupForm.css';

export default function SignupForm({ setIsLoggedIn }) {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [AccountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password not matched");
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account created");
        navigate("/dashboard");
    }

    const finalData = {
        ...formData,
        AccountType
    }
    console.log("Final data",finalData)

    return (
        <div className="signup">
            
            <div className="btns_">

                <button 
                    className={`${AccountType === "student" ? "btn bgColor" : "btn "}`} 
                    onClick={() => setAccountType("student")}>

                    Student
                </button>

                <button 
                    className={`${AccountType === "instructor" ? "btn bgColor" : "btn "}`} 
                    onClick={() => setAccountType("instructor")}>
                    Instuctor
                </button>
            </div>

            <form onSubmit={submitHandler} className="form">
                <div className="names">
                    <label>
                        <p className="mail">
                            First Name<sup className="star">*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter first Name"
                            value={formData.firstName}
                            className="input"
                        />
                    </label>
                    <label>
                        <p className="mail">
                            Last Name<sup className="star">*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="input"
                        />
                    </label>
                </div>

                <label>
                    <p className="mail">
                        Email Address<sup className="star">*</sup>
                    </p>
                    <input
                        type="email"
                        required
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email id"
                        value={formData.email} 
                        className="input"
                    />
                </label>

                <div className="passwords">
                    <label className="password">
                        <p className="mail">
                            Password <sup className="star">*</sup>
                        </p>
                        <input
                            type={showPassword1 ? ("text") : ("password")}
                            required
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="input"
                        />
                        <span onClick={() => setShowPassword1((preVal) => !preVal)} className="eye1">
                            {showPassword1 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label className="confirm">
                        <p className="mail">
                            Confirm Password<sup className="star">*</sup>
                        </p>
                        <input
                            type={showPassword2 ? ("text") : ("password")}
                            required
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm  Password"
                            value={formData.confirmPassword}
                            className="input"
                        />
                        <span onClick={() => setShowPassword2((preVal) => !preVal)} className="eye2">
                            {showPassword2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                <button className="createBtn">
                    Create Account
                </button>
            </form>
        </div>
    )
}