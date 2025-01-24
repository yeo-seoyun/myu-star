import { Link, useNavigate } from 'react-router-dom';

import '../styles/Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/Home')
    }

    return (
        <div className="login-page">
            <form className="login-form">
                <div>
                    로고이미지
                </div>

                <div className="login-input">
                    <div className="login-id">
                        <label><FaUser /></label>
                        <input type='email' placeholder='e-mail'></input>
                    </div>
                    <div className="login-pw">
                        <label><FaLock /></label>
                        <input type='password' placeholder='password'></input>
                    </div>
                </div>

                <div className="login-container">
                    <button type="button" onClick={goToHome} className="login-home">로그인</button>

                    <div className="find-container">
                        <span>Find</span>
                        <Link to="/" >ID</Link>
                        <span>/</span>
                        <Link to="/" >Password</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;