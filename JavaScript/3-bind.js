'use strict';

const { log: ln } = Math;
const log = (base, n) => ln(n) / ln(base);

// Usage
{
  const lg = log.bind(null, 10)(5);
  const ln = log.bind(null, Math.E);

  console.log('lg(5) = ' + lg);
  console.log('ln(5) = ' + ln(5));
}
