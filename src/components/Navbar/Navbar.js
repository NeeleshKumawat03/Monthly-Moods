import Cookies from 'js-cookie'
import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import './Navbar.css'

const Navbar = props => {
  const [hamburger, setHamburger] = useState(false)

  const onClickHamburger = () => {
    setHamburger(!hamburger)
  }
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="navbar">
      <h1 className="heading">Daily Mood Tracker</h1>
      <div className="ham-mobile">
        <RxHamburgerMenu className="mobile" onClick={onClickHamburger} />
      </div>

      <ul className="nav-items">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-item">
            Reports
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>

      <ul className={hamburger ? 'view-items-mobile' : 'nav-items-mobile'}>
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-item">
            Reports
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navbar)
