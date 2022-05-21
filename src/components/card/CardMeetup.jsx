import { RiCalendarEventFill } from 'react-icons/ri'
import { MdOutlineLocationOn } from 'react-icons/md'

function CardMeetup({ data }) {
  return (
    <>
      <div
        className="d-flex mb-3"
        style={{ fontWeight: '600', fontSize: '0.95rem' }}
      >
        <div className="me-5">
          <span className="fw-semibold fs-5 ">
            <RiCalendarEventFill />
          </span>{' '}
          {data.date}
        </div>
        <div>
          <span className="fw-semibold fs-5">
            <MdOutlineLocationOn />
          </span>
          {data.location}, India
        </div>
      </div>

      <button
        className="btn text-danger border col-sm-12 mb-4"
        style={{ fontSize: '0.85rem', fontWeight: '500' }}
      >
        Visit Website
      </button>
    </>
  )
}

export default CardMeetup
