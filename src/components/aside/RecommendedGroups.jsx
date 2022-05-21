import { FiThumbsUp } from 'react-icons/fi'

const mockData = [
  {
    id: 1,
    group: 'Leisure',
    image: './assets/images/groups/group-one.jpg',
    following: true,
  },
  {
    id: 2,
    group: 'Activism',
    image: './assets/images/groups/group-two.jpg',
    following: true,
  },
  {
    id: 3,
    group: 'MBA',
    image: './assets/images/groups/group-three.jpg',
    following: false,
  },
  {
    id: 4,
    group: 'Philosophy',
    image: './assets/images/groups/group-four.jpg',
    following: false,
  },
]

function FollowGroup({ data }) {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div>
        <img
          src={data.image}
          alt="group"
          style={{ width: '2.25rem', height: '2.25rem' }}
          className="rounded-circle"
        />
        <span className="ms-2" style={{ fontWeight: '500' }}>
          {data.group}
        </span>
      </div>
      {data.following ? (
        <div className="badge rounded-pill text-bg-dark">Followed</div>
      ) : (
        <div className="badge rounded-pill text-bg-light">Follow</div>
      )}
    </div>
  )
}

function RecommendedGroups() {
  return (
    <div className="mt-5">
      <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>
        <span className="fw-semibold fs-5">
          <FiThumbsUp />
        </span>{' '}
        Recommended Groups
      </div>
      {mockData.map((data) => (
        <FollowGroup data={data} key={data.id} />
      ))}
    </div>
  )
}

export default RecommendedGroups
