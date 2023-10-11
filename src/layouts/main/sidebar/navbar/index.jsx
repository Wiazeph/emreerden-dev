import classNames from "classnames";
import { NavLink } from "react-router-dom";
import navLinks from "~/utils/consts";
import { useColorStore } from "~/stores/color";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [currentPathColor, setCurrentPathColor] = useState("");
  const setColor = useColorStore((state) => state.setColor);

  const handleNavLinkOver = (color) => {
    setColor(color);
  };

  const handleNavLinkOut = () => {
    setColor(currentPathColor);
  };

  useEffect(() => {
    const matchedNavLink = navLinks.find(
      (nlink) => nlink.path === location.pathname
    );
    if (matchedNavLink) {
      setColor(matchedNavLink.color);
      setCurrentPathColor(matchedNavLink.color);
    }
  }, []);

  return (
    <nav className="w-max text-lg">
      {navLinks.map((nlink, index) => (
        <NavLink
          key={index}
          to={nlink.path}
          className="select-none"
          onClick={() => setCurrentPathColor(nlink.color)}
          onMouseOver={() => handleNavLinkOver(nlink.color)}
          onMouseOut={handleNavLinkOut}
        >
          {({ isActive }) => (
            <div
              className={classNames(
                "flex gap-5 items-center transition-all py-3",
                {
                  [nlink.color]: isActive,
                  [nlink.textHover]: !isActive,
                }
              )}
            >
              <div>{index}.</div>
              <div># {nlink.title}</div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
