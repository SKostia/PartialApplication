'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (str) => {
  const date = new Date().toISOString();
  return tagged(date.substring(0, 10), str);
};

module.exports = { tagDate };
