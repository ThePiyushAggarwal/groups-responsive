import { MdOutlineLocationOn } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'

function CardJobs({ data }) {
  return (
    <>
      <div
        className="d-flex mb-3"
        style={{ fontWeight: '600', fontSize: '0.95rem' }}
      >
        <div className="me-5">
          <span className="fw-semibold fs-5 ">
            <BsBriefcase />
          </span>{' '}
          {data.company}
        </div>
        <div>
          <span className="fw-semibold fs-5 ">
            <MdOutlineLocationOn />
          </span>
          {data.location}, India
        </div>
      </div>

      <button
        className="btn text-success border col-sm-12 mb-4"
        style={{ fontSize: '0.85rem', fontWeight: '500' }}
      >
        Apply on Timesjobs
      </button>
    </>
  )
}

export default CardJobs
