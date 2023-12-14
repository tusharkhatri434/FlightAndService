function compareTime(timeString1, timeString2) {
  let dateTime1 = new Date(Date.parse(timeString1));
  let dateTime2 = new Date(Date.parse(timeString2));
  let result = dateTime1.getTime() < dateTime2.getTime();
  console.log(result);
  return dateTime1.getTime() > dateTime2.getTime();
}
compareTime("2023-01-26T11:52:00.000-00:00", "2023-01-26T11:54:00.000-00:00");