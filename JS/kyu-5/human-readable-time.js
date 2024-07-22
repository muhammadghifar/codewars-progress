// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds % 3600) / 60);
  let second = seconds % 60;

  const formattedHours = String(hour).padStart(2, "0");
  const formattedMinutes = String(minute).padStart(2, "0");
  const formattedSeconds = String(second).padStart(2, "00");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(humanReadable(60));
