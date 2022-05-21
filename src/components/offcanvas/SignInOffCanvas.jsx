import { RiCloseCircleFill } from 'react-icons/ri'
import googleIcon from '../../images/icons/google.png'
import facebookIcon from '../../images/icons/facebook.png'
import { Link } from 'react-router-dom'

function SignInOffCanvas() {
  return (
    <div
      className="offcanvas offcanvas-bottom h-auto"
      tabIndex="-1"
      id="signinoffcanvas"
      style={{
        borderTopRightRadius: '1rem',
        borderTopLeftRadius: '1rem',
      }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Welcome Back!
        </h5>
        <button
          type="button"
          className="btn border-0 fs-3 pt-0"
          data-bs-dismiss="offcanvas"
        >
          <RiCloseCircleFill />
        </button>
      </div>

      <div className="offcanvas-body">
        <div className="">
          {/* Form */}
          <form>
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

            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                type="button"
                className="btn btn-primary rounded-pill w-50 mt-3"
              >
                Sign In
              </button>

              <Link
                to="#"
                className="text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#signupoffcanvas"
              >
                or, Sign Up
              </Link>
            </div>
          </form>
          {/*  */}

          {/* Sign In with third party */}
          <button
            className="btn border w-100 mt-4"
            style={{ fontWeight: '500' }}
          >
            <span className="me-2" style={{ width: '1rem', height: '1rem' }}>
              <img src={facebookIcon} alt="Sign in with Facebook" />
            </span>
            Sign in with Facebook
          </button>
          <button
            className="btn border w-100 mt-3"
            style={{ fontWeight: '500' }}
          >
            <span className="me-2" style={{ width: '1rem', height: '1rem' }}>
              <img src={googleIcon} alt="Sign up with Google" />
            </span>
            Sign in with Google
          </button>
          {/* T&C div */}
          <div
            className="text-muted text-center mt-3"
            style={{ fontSize: '0.8rem' }}
          >
            Forgot Password?
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInOffCanvas
