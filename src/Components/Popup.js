import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Popup = ({ handleClose }) => {
  const [login, showLogin] = useState(false);
  const [signup, showSignup] = useState(true);

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup-close" onClick={handleClose}>
          &#x2715;
        </div>
        <div className="popup-content">
          {signup && (
            <Signup
              span={0}
              showLoginLink={true}
              showLogin={showLogin}
              showSignup={showSignup}
            />
          )}
          {login && (
            <Login
              span={0}
              showSignupLink={true}
              showSignup={showSignup}
              showLogin={showLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
