function solve() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let a;
  if (days.includes("Friday")) {
    a = days.indexOf("Friday");
    
    days[a] = "proba"
  }
  console.log(days.indexOf("Monday"))
}
solve();
