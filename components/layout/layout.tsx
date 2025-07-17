import React, { useState } from 'react'

// Componenst
import Navbar from './navbar'
import Footer from './footer'

// Modals
import LoginModal from '../modals/loginModal';
import RegisterModal from '../modals/registerModal';


type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Modal geçiş fonksiyonları
  const handleOpenRegister = () => {
    setShowLogin(false);
    setTimeout(() => setShowRegister(true), 200);
  };
  const handleOpenLogin = () => {
    setShowRegister(false);
    setTimeout(() => setShowLogin(true), 200);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar
        isLogin={false}
        onOpenLogin={() => setShowLogin(true)}
      />
      <main className='flex-grow py-16'>
        {children}
      </main>
      <Footer />

      {/* Modaller burada */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onOpenRegister={handleOpenRegister} />
      )}
      {showRegister && (
        <RegisterModal onClose={() => setShowRegister(false)} onOpenLogin={handleOpenLogin} />
      )}
    </div>
  )
}

export default Layout