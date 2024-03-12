#!/usr/bin/node
const dict = require('./101-data').dict;

const totalist = Object.entries(dict);
const vals = Object.values(dict);
const valsUniq = [...new Set(vals)];
const sortedValsUniq = valsUniq.sort((a, b) => a - b); // ترتيب القيم من الصغير إلى الكبير
const newDict = {};
for (const val of sortedValsUniq) {
  const list = [];
  for (const pair of totalist) {
    if (pair[1] === val) {
      list.unshift(pair[0]);
    }
  }
  newDict[val] = list;
}
console.log(newDict);
