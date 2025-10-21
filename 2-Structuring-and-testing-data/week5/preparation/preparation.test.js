const formatAs12HourClock = require("./preparation");

test('I expect formatAs12HourClock("09:00") to be "09:00 am"', () => {
  expect(formatAs12HourClock("09:00")).toBe("09:00 am");
});
test('I expect formatAs12HourClock("15:5") to be "03:05 pm"', () => {
    expect(formatAs12HourClock("09:00")).toBe("09:00 am");
  });
test('I expect formatAs12HourClock("babar") to be false', () => {
    expect(formatAs12HourClock("babar")).toBe(false);
  });

