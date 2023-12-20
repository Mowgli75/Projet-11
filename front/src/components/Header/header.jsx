import { NavLink } from 'react-router-dom';
import ImgArgentBank from '../assets/argentBankLogo.webp';
import '../Header/header.css';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user.actions';


const header = () => {
  const user = useSelector(store => store.user);

  const logoutHandler = () => dispatch(logout);
  
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
{        user.isLogged &&<NavLink to='/' onClick={logoutHandler}>
          <i className="fa fa-user-circle"></i>
          Tony
          <i class="fa fa-sign-out"></i>
          Sign Out
        </NavLink>}
      </div>
    </section>
  );
};

export default header;
