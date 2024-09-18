import { Link } from "react-router-dom"
import logo from '../assets/logo_.png'
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="navbar">

            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="list">
                    <li>
                        <Link to="/" className="lists">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="lists">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="lists">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="btns">
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className="Navbtn">Log in</button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                        }} className="Navbtn">Sign up</button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("You Log out");
                        }} className="Navbtn">Log out</button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="Navbtn">Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}