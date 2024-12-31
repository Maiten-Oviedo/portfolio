import PropTypes from 'prop-types'
import NavBar from './sections/NavBar'
import Footer from './sections/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
