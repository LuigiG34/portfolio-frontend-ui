import { Link } from "react-router-dom";

export default function SocialLogin() {
  return (
    <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
      <div className="tp-login-option-item has-google">
        <Link to="#">
          <img src="/assets/img/login/google.svg" alt="google" />
          Sign in with google
        </Link>
      </div>
      <div className="tp-login-option-item">
        <Link to="#">
          <img src="/assets/img/login/facebook.svg" alt="facebook" />
        </Link>
      </div>
      <div className="tp-login-option-item">
        <Link to="#">
          <img src="/assets/img/login/apple.svg" alt="apple" className="apple" />
        </Link>
      </div>
    </div>
  );
}
