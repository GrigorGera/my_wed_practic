import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div>
            <header className="login-header">
                <img className="logo-img" src={logo} alt="" draggable="false" />
                <div className="login-header-txt">Регистрация</div>
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
                            <Link className='navbar-button' to="/log-in" id='check'>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Register