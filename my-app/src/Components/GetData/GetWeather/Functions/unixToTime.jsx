function unixToTime(time) {
  const unix_timestamp = time;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  const amOrPm = hours < 12 ? "am" : "pm";

  if (hours > 12) {
    hours = hours % 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedTime = hours + amOrPm;

  return formattedTime;
}

export default unixToTime;
