import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

const Account = () => {
  const [acct, setAcct] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleAcctWrap = (e) => {
    setAcct(!acct);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="acct">
      <div className="acct-user-circle" onClick={toggleAcctWrap}>
        {user.firstName.charAt(0).toUpperCase()}
      </div>
      <div className={acct ? 'acct-wrap' : 'acct-wrap hidden'}>
        <div className="acct-info">
          <div className="acct-pic">
            {user.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="acct-user">
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{user.email}</p>
          </div>
          <a href="/profile" className="acct-manage-btn btn-neutral">
            Manage your Account
          </a>
        </div>
        <div className="acct-signout">
          <button className="btn-neutral" onClick={handleLogout}>
            Signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
