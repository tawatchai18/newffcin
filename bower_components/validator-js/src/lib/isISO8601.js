import assertString from './util/assertString';

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
const iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */
const isValidDate = (str) => {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  const ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
  if (ordinalMatch) {
    const oYear = Number(ordinalMatch[1]);
    const oDay = Number(ordinalMatch[2]);
    // if is leap year
    if (oYear % 4 === 0
      && oYear % 100 !== 0) return oDay <= 366;
    return oDay <= 365;
  }
  const match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  const year = match[1];
  const month = match[2];
  const day = match[3];
  // create a date object and compare
  const d = new Date(`${year}-${month || 1}-${day || 1}`);
  if (isNaN(d.getFullYear())) return false;
  if (month && day) {
    return d.getFullYear() === year
      && (d.getMonth() + 1) === month
      && d.getDate() === day;
  }
  return true;
};

export default function isISO8601(str, options) {
  assertString(str);
  const check = iso8601.test(str);
  if (!options) return check;
  if (check && options.strict) return isValidDate(str);
  return check;
}