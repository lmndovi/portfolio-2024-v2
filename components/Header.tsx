import React from "react";
import { Navbar } from "./Navbar";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <ul className="flex items-center">
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/lu-ndovi-713819208/?originalSubdomain=uk"
              fgColor="gray"
              bgColor="transparent"
            />
          </li>
          <li>
            <SocialIcon
              url="https://github.com/lmndovi"
              fgColor="gray"
              bgColor="transparent"
            />
          </li>
          <li>
            <div>
              <SocialIcon
                url="https://www.instagram.com/lusungundovi/?hl=en"
                fgColor="gray"
                bgColor="transparent"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
