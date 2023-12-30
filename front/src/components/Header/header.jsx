import { NavLink } from 'react-router-dom';
import ImgArgentBank from '../assets/argentBankLogo.webp';
import '../Header/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user.actions';

const Header = () => {
  const user = useSelector(store => store.user);
 const dispatch = useDispatch()
  const logoutHandler = () => dispatch(logout(user));
  
  return (
    <section className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={ImgArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="main-nav-item">
       {!user.isLogged && <NavLink to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>}
{        user.isLogged &&<NavLink to='/user'>
          <i className="fa fa-user-circle"></i>
          Tony
        </NavLink>}
        {        user.isLogged &&<NavLink to='/' onClick={logoutHandler}>
          <i class="fa fa-sign-out"></i>
          Sign Out
        </NavLink>}
      </div>
    </section>
  );
};

export default Header;
