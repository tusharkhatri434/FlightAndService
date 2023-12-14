function compareTime(timeString1, timeString2) {
  let dateTime1 = new Date(Date.parse(timeString1));
  let dateTime2 = new Date(Date.parse(timeString2));
  let result = dateTime1.getTime() < dateTime2.getTime();
  // return dateTime1.getTime() > dateTime2.getTime();
  return true;
}

module.exports = {
  compareTime,
};
