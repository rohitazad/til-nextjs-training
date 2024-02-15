'use client';

import { useStateContext } from '../../app/Store/statecontext';

const UserInfoDetails = () => {
  const { state } = useStateContext();
  const login = state.login.isLogin;
  const userInfo = login ? state.login.userInfo : {};
  console.log(state.login);
  return (
    <>
      {login ? (
        <div>
          <h2>User INfo</h2>
          <h3>User Name:- {userInfo.username}</h3>
          <h3>User email:- {userInfo.email}</h3>
          <h3>User Age:- {userInfo.age}</h3>
        </div>
      ) : (
        <div>Please login and see to user info</div>
      )}
    </>
  );
};

export default UserInfoDetails;
