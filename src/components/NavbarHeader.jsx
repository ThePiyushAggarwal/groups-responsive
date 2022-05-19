import { Link } from 'react-router-dom'
import logo from '../images/icons/logo/brand-logo.png'
import { FaSearch, FaCaretDown } from 'react-icons/fa'

function NavbarHeader() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        {/* Header Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>
        {/* Header Search */}
        <form id="search-bar">
          <div className="input-group" style={{ width: '360px' }}>
            <button
              type="button"
              className="input-group-text bg-light border-end-0"
              style={{
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              className="bg-light form-control border-start-0"
              placeholder="Search for your favorite groups in ATG"
              style={{
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
              }}
            />
          </div>
        </form>
        {/* Header right side */}
        <div style={{ fontSize: '1rem' }}>
          <span style={{ fontWeight: '500' }}>Create account.</span>
          <Link to="/" className="text-decoration-none">
            <span style={{ fontWeight: '700' }}> It’s free!</span>
            <span className="text-dark">
              <FaCaretDown />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarHeader
