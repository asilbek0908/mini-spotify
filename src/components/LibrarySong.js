import React from "react";
import { playSong } from "../util";

function LibrarySong({
  id,
  songs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Bug fix skip-forwar-play
    playSong(isPlaying, audioRef);
    // Adding  Active State

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
