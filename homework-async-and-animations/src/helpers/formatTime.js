const formatTime = function format(time) {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
};

export default formatTime;
