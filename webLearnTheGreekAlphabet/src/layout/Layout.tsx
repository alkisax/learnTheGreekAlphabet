// webLearnTheGreekAlphabet\src\layout\Layout.tsx
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/layoutComponents/Navbar'
import MockAdBanner from '../components/ads/MockAdBanner'

const Layout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundColor: 'black',
      }}
    >
      <Navbar />

      {/* εδώ θα μπαίνουν όλες οι σελίδες */}
      <div className="flex-1">
        <Outlet />
      </div>

      <MockAdBanner />

      <footer className="flex justify-center gap-6 px-6 py-6 text-sm text-gray-300">
        <NavLink to="/about" className="hover:text-white">
          About
        </NavLink>

        <NavLink to="/privacy" className="hover:text-white">
          Privacy
        </NavLink>
      </footer>
    </div>
  )
}

export default Layout