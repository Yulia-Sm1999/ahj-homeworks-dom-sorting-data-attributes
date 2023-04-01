export default function sortData(table, attrName, reverse) {
  const rowsToSort = Array.from(table.rows).slice(1);
  let sortedRows;
  if (reverse === true) {
    sortedRows = rowsToSort.sort((a, b) => a.getAttribute(attrName) - b.getAttribute(attrName));
  } else {
    sortedRows = rowsToSort.sort((a, b) => b.getAttribute(attrName) - a.getAttribute(attrName));
  }
  table.tBodies[0].append(...sortedRows);

  // setInterval(() => {
  //   table.tBodies[0].appendChild(...sortedRows.reverse());
  // }, 2000);
}
