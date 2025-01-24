
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css'

function Landing() {
    const navigate = useNavigate();

    const goToSingUp = () => {
        navigate('/SignUp')
    };
    const goToLogin = () => {
        navigate('/Login')
    };

    return (
        <div className="landing-page">
            <div>
                로고이미지
            </div>

            <div className="button-container">
                <button type="button" onClick={goToSingUp} className="signup">시작하기</button>
                <button type="button" onClick={goToLogin} className="login">로그인</button>
            </div>
        </div>
    )
}

export default Landing;