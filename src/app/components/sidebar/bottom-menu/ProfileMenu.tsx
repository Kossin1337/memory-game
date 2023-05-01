import React, { useState } from "react";

/* components */
import Login from "../../auth/Login";
import Register from "../../auth/Register";

/* icons */
import { ProfileIcon } from "./icons/ProfileIcon";
import { JoinIcon } from "./icons/JoinIcon";
import { RegisterIcon } from "./icons/RegisterIcon";

import "./ProfileMenu.scss";

const ProfileMenu = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  return (
    <div className={`${loggedIn ? "logged" : "unlogged"} profile-menu`}>
      {loggedIn ? (
        <div className="profile">
          <span className="profile-name">JJayJoker</span>
          <ProfileIcon />
        </div>
      ) : (
        <div className="login-register">
          <div
            className="action-container login"
            onClick={() => setOpenLogin(true)}
          >
            <span className="action-title">LOGIN</span>
            <JoinIcon />
            {openLogin && (
              <Login isOpen={openLogin} onClose={() => setOpenLogin(false)} />
            )}
          </div>
          <div
            className="action-container register"
            onClick={() => setOpenRegister(true)}
          >
            <span className="action-title">REGISTER</span>
            <RegisterIcon />
            {openRegister && (
              <Register
                isOpen={openRegister}
                onClose={() => setOpenRegister(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
