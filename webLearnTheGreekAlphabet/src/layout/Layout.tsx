// webLearnTheGreekAlphabet\src\layout\Layout.tsx
import { Outlet } from 'react-router-dom'
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
    </div>
  )
}

export default Layout