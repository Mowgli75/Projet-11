import React, { useState, useEffect } from "react";
import "../admin/admin.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/actions/user.actions";
import { NavLink, useNavigate } from "react-router-dom";

const Admin = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogged) {
      navigate("/signin");
    }
  }, []);
  /* Get username */
  const [data, setData] = useState({
    userName: user.userName,
  });

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ userName: data.userName }),
    });
    if (response.ok) {
      const data = await response.json();
      const username = data.body;
      dispatch(editUser(username));
    }
  };

  return (
    <main className="main-admin bg-dark-admin">
      <div className="header">
        <h1 className="labels">
          Edit User info
          <br />
        </h1>
        <form className="form-admin">
          <div className="labels">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={data.userName}
              onChange={handleChange}
            />
          </div>
          <div className="labels">
            <label htmlFor="firstname">First Name : </label>
            <input type="text" defaultValue={user.firstName} disabled />
          </div>
          <div className="labels">
            <label htmlFor="lastname">Last Name : </label>
            <input type="text" defaultValue={user.lastName} disabled />
          </div>
          <div className="button">
            <button className="edit-button" onClick={handleForm}>
              Save
            </button>
            {user.isLogged && (
              <NavLink to="/user">
                <button className="edit-button">cancel</button>
              </NavLink>
            )}
          </div>
        </form>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Admin;
