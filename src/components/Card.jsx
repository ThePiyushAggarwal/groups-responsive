import { BsThreeDots } from 'react-icons/bs'
import CardFooter from './CardFooter'
import CardJobs from './CardJobs'
import CardMeetup from './CardMeetup'

function Card({ data }) {
  return (
    <div className="card mb-3">
      {/* Card Main Image */}
      {data.mainImage && (
        <img
          src={data.mainImage}
          alt="Main"
          className="card-image-top"
          style={{ height: '30vh', objectFit: 'cover' }}
        />
      )}
      {/* Card Body */}
      <div className="card-body">
        {/* Card Title */}
        <h6
          className="card-title"
          style={{
            fontWeight: '500',
            textShadow: '0px 2px 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          {data.categoryEmoji}
          {data.category}
        </h6>
        {/* Title */}
        <div className="d-flex justify-content-between mt-3 card-title">
          <h4 className="fw-bold">{data.title}</h4>
          <div>
            <button className="btn">
              <BsThreeDots className="fs-4" />
            </button>
          </div>
        </div>
        {data.content && (
          <div className="card-text">
            <p className="text-black-50">{data.content}</p>
          </div>
        )}

        {/* Category - Meetup */}
        {data.category === 'Meetup' && <CardMeetup data={data} />}
        {/* Category - Jobs */}
        {data.category === 'Jobs' && <CardJobs data={data} />}

        {/* Card Footer */}
        <CardFooter data={data} />
      </div>
      {/* Card body end */}
    </div>
  )
}

export default Card
