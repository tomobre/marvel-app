import Navbar from '../../components/navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#d8dcdd;' }}>{children}</main>
    </>
  );
}
