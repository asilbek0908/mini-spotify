import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>
        <i className="fa-brands fa-spotify spotify"></i>Mini Spotify
      </h1>
      <button
        className="btn"
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
