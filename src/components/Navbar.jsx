import { Link } from 'react-router-dom'
import { MdGroupAdd } from 'react-icons/md'

function Navbar() {
  return (
    <div className="navbar navbar-expand-sm navbar-light">
      <div className="container border-bottom px-0">
        {/* Navbar Links */}
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

        {/* Empty Space */}

        {/* Buttons */}

        {/* Dropdown */}
        <div className="dropdown bg-light ms-auto">
          <button
            type="button"
            class="btn dropdown-toggle py-0"
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
          className="btn btn-primary ms-4 py-0"
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
  )
}

export default Navbar
