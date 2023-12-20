import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user.actions';

import '../Signin/signin.css';
import { useNavigate } from 'react-router-dom';

const signin = () => {
  const [data, setData] = useState({
    email: "tony@stark.com",
    password: "password123",
  })

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const user = await response.json()
    if (response.ok) {
      dispatch(login(user.body))
      navigate('/user')
    }


  }

  console.log(data)
  return (
    <section className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={data.email}  onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit' className="sign-in-button">Sign In</button>
        </form>
      </section>
    </section>
  );
};

export default signin;
