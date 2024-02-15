'use client';

import styles from './header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useStateContext } from '../../app/Store/statecontext';

const HeaderComponent = () => {
  const { state, dispatch } = useStateContext();
  const userName =
    state.login &&
    state.login.userInfo &&
    state.login.userInfo.username &&
    state.login.userInfo.username !== ''
      ? state.login.userInfo.username
      : 'Guest User';

  //console.log('state', state);
  const signIn = () => {
    fetchUserDetails();
  };
  const logOut = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {
        ssoReady: false,
        isLogin: false,
        isPrime: false,
        userInfo: {},
        ssoid: '',
        ticketId: '',
        accessibleFeatures: [],
        permissions: [],
      },
    });
  };
  const fetchUserDetails = async () => {
    const data = await fetch(`http://localhost:3000/api/userinfo`);
    const resData = await data.json();
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        ssoReady: true,
        isLogin: true,
        isPrime: true,
        userInfo: resData.userInfo,
        ssoid: '1234',
        ticketId: '875334',
        accessibleFeatures: ['toi', 'et', 'nbt'],
        permissions: ['prime'],
      },
    });
  };

  return (
    <>
      <header className={styles.header}>
        <span>Logo Here</span>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">ABout</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            {state.login.isLogin ? (
              <span className={styles.signIn}>
                <span>welcome back {userName}</span>
                <span onClick={logOut}>LogOut</span>
              </span>
            ) : (
              <span className={styles.signIn} onClick={signIn}>
                SignIn
              </span>
            )}
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderComponent;
