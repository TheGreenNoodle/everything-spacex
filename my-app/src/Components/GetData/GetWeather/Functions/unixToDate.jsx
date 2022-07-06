import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function unixToDate(time) {
  const unix_timestamp = time;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  const monthArray = [
    "Jan,",
    "Feb,",
    "Mar,",
    "Apr,",
    "May,",
    "Jun,",
    "Jul,",
    "Aug,",
    "Sept,",
    "Oct,",
    "Nov,",
    "Dec,",
  ];

  const weekArray = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

  const month = monthArray[date.getMonth()];
  const dayNum = date.getDate();
  const dayText = weekArray[date.getDay()];

  return (
    <div>
      <p className={weatherCards.forecastText}>{dayText}</p>
      <p className={weatherCards.forecastText}>{month + " " + dayNum}</p>
    </div>
  );
}

export default unixToDate;
