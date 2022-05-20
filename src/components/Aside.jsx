import { MdOutlineLocationOn, MdEdit } from 'react-icons/md'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import RecommendedGroups from './RecommendedGroups'

function Aside() {
  return (
    <div className="col-sm-3 mt-5">
      {/* Location */}
      <div className="d-flex justify-content-between">
        <div>
          <MdOutlineLocationOn />
          Noida, India
        </div>
        <div>
          <MdEdit />
        </div>
      </div>
      <hr />
      {/* Location Message */}
      <div className="d-flex text-muted" style={{ fontSize: '0.75rem' }}>
        <div className="py-0 px-2">
          <AiOutlineExclamationCircle />
        </div>
        <div>
          Your location will help us serve better and extend a personalised
          experience.
        </div>
      </div>
      {/* Recommended Groups */}
      <RecommendedGroups />
    </div>
  )
}

export default Aside
