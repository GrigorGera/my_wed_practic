import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
// import { Form } from './Form'
// import { useDispatch } from 'react-redux'
// import { setUser } from 'store/slices/userSlice'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    // const dispatch = useDispatch();
    
    // const handleLogin = (email, password) => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(console.log)
    //         .catch
    // }
    return (
        <div>
            <header className="login-header">
                <img className="logo-img" src={logo} alt="" draggable="false" />
                <div className="login-header-txt">Логин</div>
            </header>
            <main>
                <div className="subbmition-container">
                    <div className="subbmition-panel">
                        <div className="submit-login">
                            Введите логин:
                            <input type="text" className="input-txt" id='login' />
                        </div>
                        <div className="submit-password">
                            Введите пароль:
                            <input type="text" className="input-txt" id='password' />
                        </div>
                        <div className="log-reg-butons">
                            <Link className='navbar-button' to="/" id='check'>Войти</Link>
                            <Link className='navbar-button' to="/register" id='check'>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login