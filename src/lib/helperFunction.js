export const getTimeObjectFromSeconds = (s) => {
  const minutes = Math.floor(s / 60);
  const seconds = s - minutes * 60;
  if (seconds < 10) {
    return `0${minutes}:0${seconds}`;
  } else {
    return `0${minutes}:${seconds}`;
  }
};
