import Navbar from '../../components/navbar/Navbar';
import { Roboto_Condensed } from 'next/font/google';

const inter = Roboto_Condensed({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div style={{ background: '#d8dcdd' }} className={inter.className}>
      <Navbar />
      { // prettier-ignore 
      }
      <main >{children}</main>
    </div>
  );
}
