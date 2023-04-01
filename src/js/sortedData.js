import makeTableFromData from './makeTable';
import data from './data';
import sortData from './sortData';

const table = makeTableFromData(data);
const tableHeaderCells = [...document.querySelectorAll('th')];
const allColumnNames = [];
tableHeaderCells.forEach((th) => allColumnNames.push(th.textContent));

allColumnNames.forEach((attrName) => setInterval(() => {
  sortData(table, attrName, false);
  setTimeout(() => {
    sortData(table, attrName, true);
  }, 2000);
}, 3000));

// setInterval(() => {
//   allColumnNames.forEach((attrName) => sortData(table, attrName));
// }, 3000);
