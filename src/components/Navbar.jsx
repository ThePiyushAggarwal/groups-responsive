import { Link } from 'react-router-dom'
import { MdGroupAdd } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa'

function Navbar() {
  return (
    <>
      {/* Navbar for medium screens and above */}
      <div className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid border-bottom px-md-0 px-sm-3 py-sm-2">
          <Link className="navbar-brand fw-semibold d-md-none" to="#">
            All Posts (32)
          </Link>
          <button
            className="navbar-toggler btn btn-light fw-semibold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            Filter: All <FaCaretDown />
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item border-bottom border-dark">
                <Link className="nav-link px-3 active" to="/">
                  All Posts(32)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}

          {/* Dropdown */}
          <div className="dropdown bg-light ms-auto d-none d-md-inline">
            <button
              type="button"
              className="btn dropdown-toggle py-0"
              data-bs-toggle="dropdown"
              style={{ fontWeight: '500' }}
            >
              Write a Post
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  Link 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Link 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Link 3
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-primary ms-4 py-0 d-none d-md-inline"
            style={{ fontWeight: '500' }}
          >
            <span className="fs-5">
              <MdGroupAdd />
            </span>{' '}
            Join Group
          </button>
        </div>
        {/* Container for Navbar */}
      </div>

      {/* Navbar for mobile */}
      {/* <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar
