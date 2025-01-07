import PropTypes from 'prop-types'
import NavBar from '../componets/sections/Header'
import Footer from '../componets/sections/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
