import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
        className="nav-logo"
      />
      <img
        src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/200902082_1086485268847034_831121595021282643_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH0qoJuuXIluFOWn7bSBc1MMDNxX3zYRvYwM3FffNhG9ns45uXfrzY5nZQsAbLJL-_MXY043JbLKjiJhaffR3QB&_nc_ohc=J5hIaGkDSPEAX_h8rbB&_nc_ht=scontent-sjc3-1.xx&oh=c86dfaf0687fddffc25736d6d48e6541&oe=60E801F1"
        alt=""
        className="nav-profile"
      />
    </div>
  );
}

export default Nav;
