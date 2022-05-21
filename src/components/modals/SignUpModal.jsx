import { Link } from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr'
import facebookIcon from '../../images/icons/facebook.png'
import googleIcon from '../../images/icons/google.png'
import art from '../../images/signup-art.png'

function SignUpModal() {
  return (
    <div className="modal fade" id="signup" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-media-query">
        <div className="modal-content">
          <div className="modal-header alert alert-success">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="modal-body" style={{ position: 'relative' }}>
            <div className="container p-3">
              {/* Headers */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="fw-bold fs-3">Create Account</div>
                <div>
                  Already have an account?{' '}
                  <Link
                    to="#"
                    data-bs-target="#signin"
                    data-bs-toggle="modal"
                    className="text-decoration-none"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              {/* Form and Art */}
              <div className="row">
                <div className="col-sm">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control bg-light py-3"
                        style={{
                          borderRadius: '0',
                          borderTopLeftRadius: '0.5rem',
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control bg-light py-3"
                        style={{
                          borderRadius: '0',
                          borderTopRightRadius: '0.5rem',
                        }}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control rounded-0 bg-light py-3"
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      className="form-control rounded-0 bg-light py-3"
                    />
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="form-control rounded-0 rounded-bottom bg-light py-3"
                    />

                    <button
                      type="button"
                      className="btn btn-primary rounded-pill w-100 mt-3"
                    >
                      Create Account
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
                    </span>
                    Sign up with Facebook
                  </button>
                  <button
                    className="btn border w-100 mt-3"
                    style={{ fontWeight: '500' }}
                  >
                    <span
                      className="me-2"
                      style={{ width: '1rem', height: '1rem' }}
                    >
                      <img src={googleIcon} alt="Sign up with Google" />
                    </span>
                    Sign in with Google
                  </button>
                </div>
                {/* Art */}
                <div className="col-sm d-flex flex-column  justify-content-between">
                  <img
                    src={art}
                    alt=""
                    style={{ height: '20rem', width: '20rem' }}
                  />
                  {/* T&C div */}
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                    By signing up, you agree to our{' '}
                    <span className="text-decoration-underline">
                      Terms & Conditions
                    </span>{' '}
                    and{' '}
                    <span className="text-decoration-underline">
                      {' '}
                      Privacy policy
                    </span>
                  </div>
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

export default SignUpModal
