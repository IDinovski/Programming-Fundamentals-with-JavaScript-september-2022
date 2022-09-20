function solve(bandName, albumName, songName) {
  let songDurationinSecond =
   ( albumName.length * bandName.length) * songName.length / 2;
   console.log(`The plate was rotated ${Math.ceil(songDurationinSecond/2.5)} times.`);
}
solve('Rammstein', 'Sehnsucht', 'Engel');
