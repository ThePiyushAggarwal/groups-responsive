import { Link } from 'react-router-dom'
import logo from '../../images/icons/logo/brand-logo.png'
import { FaSearch, FaCaretDown } from 'react-icons/fa'

function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-md d-none d-md-block">
      <div className="container-lg">
        {/* Header Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>
        {/* Header Search */}
        <form id="search-bar" className="col-md-5 col-xl-4">
          <div className="input-group">
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
              className="bg-light form-control border-start-0 ps-0"
              placeholder="Search for your favorite groups in ATG"
              style={{
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
              }}
            />
          </div>
        </form>
        {/* Header right side */}
        <div>
          <span style={{ fontWeight: '500' }}>Create account.</span>
          <Link
            to="#"
            data-bs-target="#signup"
            className="text-decoration-none"
            data-bs-toggle="modal"
          >
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

export default HeaderNavbar
