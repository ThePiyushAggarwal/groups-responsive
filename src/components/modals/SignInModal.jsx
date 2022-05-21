import { Link } from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr'
import facebookIcon from '../../images/icons/facebook.png'
import googleIcon from '../../images/icons/google.png'
import art from '../../images/signup-art.png'

function SignInModal() {
  return (
    <div className="modal fade" id="signin" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header alert alert-success">
            Let's learn, share & inspire each other with our passion for
            computer engineering. 🤘🏼
          </div>
          <div className="modal-body" style={{ position: 'relative' }}>
            <div className="container-lg p-3">
              {/* Headers */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="fw-bold fs-3">Sign In</div>
                <div>
                  Don’t have an account yet?{' '}
                  <Link
                    to="#"
                    data-bs-target="#signup"
                    data-bs-toggle="modal"
                    className="text-decoration-none"
                  >
                    Create new for free!
                  </Link>
                </div>
              </div>
              {/* Form and Art */}
              <div className="row">
                <div className="col-sm">
                  <form>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control rounded-0 rounded-top bg-light py-3"
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      className="form-control rounded-0 rounded-bottom bg-light py-3"
                    />

                    <button
                      type="button"
                      className="btn btn-primary rounded-pill w-100 mt-3"
                    >
                      Sign In
                    </button>
                  </form>
                  {/* Sign In with third party */}
                  <button
                    className="btn border w-100 mt-4"
                    style={{ fontWeight: '500' }}
                  >
                    <span
                      className="me-2"
                      style={{ width: '1rem', height: '1rem' }}
                    >
                      <img src={facebookIcon} alt="Sign in with Facebook" />
                    </span>{' '}
                    Sign in with Facebook
                  </button>
                  <button
                    className="btn border w-100 mt-3"
                    style={{ fontWeight: '500' }}
                  >
                    <span
                      className="me-2"
                      style={{ width: '1rem', height: '1rem' }}
                    >
                      <img src={googleIcon} alt="Sign in with Google" />
                    </span>
                    Sign in with Google
                  </button>
                </div>
                {/* Art */}
                <div className="col-sm">
                  <img
                    src={art}
                    alt=""
                    style={{ height: '20rem', width: '20rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            style={{ position: 'absolute', top: '-1.9rem', right: '-1.9rem' }}
            className="fs-4 rounded-circle border-0 opacity-75 py-0"
            data-bs-dismiss="modal"
          >
            <GrFormClose />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInModal
