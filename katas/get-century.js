/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

function getCentury(year) {
  // calculate the century
  const century = Math.ceil(year / 100);
  // return right suffix if number ends in 1, 2 or 3
  switch (century % 10) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  if (century >= 11 && century <= 13) {
    suffix = "th";
  }

  return century + suffix;
}

module.exports = getCentury;
