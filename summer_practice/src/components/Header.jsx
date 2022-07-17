import logo from './images/logo.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="Header">
            <nav className="navbar">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="" draggable="false" />
                    <div className="logo-txt">Лаки-собаки</div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='navbar-button' to="log-in">Войти</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;