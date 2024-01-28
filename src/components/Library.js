import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>

      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              songs={songs}
              id={song.id}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
