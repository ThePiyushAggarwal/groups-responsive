import { BsEye, BsShareFill } from 'react-icons/bs'

function CardFooter({ data }) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src={data.profilePicture}
          alt="Profile"
          className="rounded-circle shadow"
          style={{ width: '3rem', height: '3rem', objectFit: 'cover' }}
        />
        <div className="fw-semibold ms-2">{data.name}</div>
      </div>

      {/* View and Share button */}
      <div className="d-flex text-muted align-items-center">
        <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>
          <span className="fs-6">
            <BsEye />
          </span>{' '}
          {data.views} views
        </div>
        <div>
          <button className="btn btn-light ms-5">
            <BsShareFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardFooter
