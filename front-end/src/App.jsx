import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import HeroSection from './components/layout/HeroSection.jsx';
import CryptoSection from './components/crypto/CryptoSection.jsx';
import ThirdSection from './components/layout/ThirdSection.jsx';
import EssentialCrypto from './components/crypto/EssentialCrypto.jsx';
import LastSection from './components/layout/LastSection.jsx';
import Footer from './components/layout/Footer.jsx';
import SignUp from './pages/SignUp.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import SignIn from './pages/SignIn.jsx';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CryptoSection />
      <ThirdSection />
      <EssentialCrypto />
      <LastSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/create" element={<CreateAccount />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
