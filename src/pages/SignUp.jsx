
import '../styles/SignUp.css'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

function SignUp() {

    return (
        <div className="signup-page">
            <form className="signup-form">
                <div>
                    로고이미지
                </div>

                <div className="signup-input">
                    <div className="signup-name">
                        <label><FaUser /></label>
                        <input type='text'></input>
                    </div>
                    <div className="signup-email">
                        <label><FaEnvelope /></label>
                        <input type='email'></input>
                    </div>
                    <div className="signup-phone">
                        <label><FaPhone /></label>
                        <input type='tel'></input>
                    </div>
                    <div className="signup-pw">
                        <label><FaLock /></label>
                        <input type='password'></input>
                    </div>
                    <div className="signup-confirm">
                        <label><FaLock /></label>
                        <input type='password'></input>
                    </div>
                </div>

                <div className="agreement-form">
                    <h3>약관동의</h3>

                    <div className="all-check">
                        <input type="checkbox" id="agreement-all" className="select-all"></input>
                        <label htmlFor="agreement-all">모든 약관을 확인하고 전체 동의합니다.</label>
                    </div>

                    <ul>
                        <li>
                            <input type="checkbox" id="agreement-terms" className=""></input>
                            <label htmlFor="agreement-terms"><span>[필수]</span> 이용약관 동의</label>
                            {/* <button type="button" className="agreement-view">내용보기</button> */}
                        </li>
                        <li>
                            <input type="checkbox" id="agreement-privacy" className=""></input>
                            <label htmlFor="agreement-privacy"><span>[필수]</span> 개인정보 수집 및 이용 동의</label>
                        </li>
                    </ul>
                </div>

                <div className="signup-container">
                    <button type="button" className="singup-submit">회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;