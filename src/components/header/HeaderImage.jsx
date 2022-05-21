import { BiArrowBack } from 'react-icons/bi'
import GroupImage from '../../images/header-image.png'

function HeaderImage() {
  return (
    <div className="position-relative" style={{ height: '60vh' }}>
      <div
        className="position-absolute"
        style={{
          bottom: '0',
          left: '0',
          zIndex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: 'hsla(0, 0%, 10%, 0.5)',
        }}
      >
        {/* Only for medium or bigger screens */}
        <div
          className="position-absolute text-white d-none d-md-block"
          style={{
            bottom: '3rem',
            left: '8rem',
          }}
        >
          <h2>Computer Engineering</h2>
          <h6>142,765 Engineers follow this</h6>
        </div>

        {/* For smaller screens than medium */}
        <div className="d-md-none h-100 w-100 p-3">
          <div className="h-100 d-flex flex-column justify-content-between">
            {/* Search Icon and Join Group button */}
            <div className="d-flex justify-content-between text-white">
              <div>
                <BiArrowBack />
              </div>

              <div>
                <button
                  className="btn text-white border"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#signupoffcanvas"
                >
                  Join Group
                </button>
              </div>
            </div>

            {/* Group Name */}

            <div className="text-white">
              <h2>Computer Engineering</h2>
              <h6>142,765 Engineers follow this</h6>
            </div>
          </div>
        </div>
      </div>
      <img
        className="mb-4"
        src={GroupImage}
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        }}
        alt=""
      />
    </div>
  )
}

export default HeaderImage
