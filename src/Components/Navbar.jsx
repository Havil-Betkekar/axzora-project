import React from "react";
import { ReactComponent as AxzoraLogo } from "../Assets/CompLogo.svg";
import { ReactComponent as PhoneIcon } from "../Assets/MobImg.svg";
import { ReactComponent as MailIcon } from "../Assets/EmailImg.svg";

function Navbar() {
  return (
    <>
      <div className="navbarClass">
        <div className="navbarLogo">
          <AxzoraLogo width="290" height="125"></AxzoraLogo>
        </div>
        <div className="contactClass">
          <div className="numberClass">
            <p>
              <span>
                <PhoneIcon width="30" height="30" />
              </span>
              (91) 926262626
            </p>
          </div>
          <div className="emailClass">
            <p>
              <span>
                <MailIcon width="30" height="27" />
              </span>{" "}
              support@axzora.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
