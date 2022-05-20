import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function CardMenu() {
  return (
    <div className="dropdown">
      <button className="btn" type="button" data-bs-toggle="dropdown">
        <BsThreeDots className="fs-4" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to="#">
            Edit
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Report
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Option 3
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CardMenu
