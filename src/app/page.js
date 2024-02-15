import Image from 'next/image';
import styles from './page.module.css';
import UserInfoDetails from '@/components/UserInfo';

export default function Home() {
  return (
    <>
      <h1>Hello Next js</h1>
      <UserInfoDetails />
    </>
  );
}
