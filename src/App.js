import './App.css';
import Footer from './components/Footer/Footer';
import QRCodeCard from './components/QRCodeCard/QRCodeCard';

function App() {
  return (
    <>
      <main>
        <h1 className='hide'>QR code component</h1>
        <QRCodeCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
