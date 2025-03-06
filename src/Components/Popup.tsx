import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Popup = (props: { handleClose: () => void }) => {
  const [login, showLogin] = useState<boolean>(false);
  const [signup, showSignup] = useState<boolean>(true);

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup-close" onClick={props.handleClose}>
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
