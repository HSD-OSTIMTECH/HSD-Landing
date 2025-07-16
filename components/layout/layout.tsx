import React from 'react'

// Componenst
import Navbar from './navbar'
import Footer from './footer'

// Modals
import LoginModal from '../modals/loginModal';
import RegisterModal from '../modals/registerModal';


type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar isLogin={false}/>
        
        <main className='flex-grow'>
            {children}
        </main>

        <Footer />
    </div>
  )
}

export default Layout