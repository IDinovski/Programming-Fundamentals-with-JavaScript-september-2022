function solve(numberOfCenturies) {
  let year = numberOfCenturies * 100;
  let days = Math.trunc(365.2422 * year);
  let hours = 24 * days;
  let minutes = 60 * hours;
  console.log(
    `${numberOfCenturies} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}
solve(1);
