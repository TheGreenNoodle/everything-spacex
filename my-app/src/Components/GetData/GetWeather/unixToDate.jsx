function unixToDate(time) {
  const unix_timestamp = time;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = monthArray[date.getMonth()];
  const dayNum = date.getDate();
  const dayText = weekArray[date.getDay()];

  const formattedDate = dayText + " " + month + " " + dayNum;

  return formattedDate;
}

export default unixToDate;
