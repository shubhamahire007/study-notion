import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import {FcGoogle} from "react-icons/fc"

import './Template.css'
export default function Template({ title, desc1, desc2, formType, setIsLoggedIn }) {
    return (
        <div className="container">
            <div className="subCont">

                <h1 className="heading">{title}</h1>

                <p className="desc">
                    <span className="desc1">{desc1}</span>
                    <br />
                    <span className="desc2">{desc2}</span>
                </p>

                {formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className="or">
                    <div className="line"></div>
                    <p>OR</p>
                    <div className="line"></div>
                </div>

                <button className="google">
                    <FcGoogle/>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}