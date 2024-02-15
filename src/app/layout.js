import './globals.css';
import { Inter } from 'next/font/google';
import HeaderComponent from '@/components/Header';
import FooterComponents from '@/components/Footer';
import { StateProvider } from '../app/Store/statecontext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My First Next Js APP',
  description: 'My First Description App Next js ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body className={inter.className}>
          <HeaderComponent />
          {children}
          <FooterComponents />
        </body>
      </StateProvider>
    </html>
  );
}
