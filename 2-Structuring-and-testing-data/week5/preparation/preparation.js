"use strict";

/*
 * Given a time in 24 hour clock
 * When we call formatAs12HourClock()
 * Then we get back a string representing the same time in 12 hour clock.
 */

function formatAs12HourClock(time = "") {
  const [hours, minutes] = time.split(":");
  // Check errors.
  if (isNaN(hours) || isNaN(minutes)) {
    return false;
  }
  if (hours < 0 || hours >= 24 || minutes < 0 || minutes > 59) {
    return false;
  }

  let meridiem = hours >= 12 ? "pm" : "am";
  // Enhanced by IA
  // const hourClock =  hours > 12 ? hours - 12 : hours;
  let hourClock = hours % 12;
  hourClock = hourClock === 0 ? 12 : hourClock; // Convert 0 to 12 for 12 AM/PM.

  return `${String(hourClock).padStart(2, 0)}:${minutes.padStart(2, 0)} ${meridiem}`;
}

// const times = ["12:00", "00:30", "15:5", "09:45", "04:67", "babar"];
// for (let time of times) {
//   console.log(formatAs12HourClock(time));
// }

module.exports = formatAs12HourClock;
