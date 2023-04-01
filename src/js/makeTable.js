export default function makeTableFromData(dataForTable) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById('body').appendChild(table);

  const headerRow = document.createElement('tr');
  thead.appendChild(headerRow);
  Object.keys(dataForTable[0]).forEach((key) => {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  });

  dataForTable.forEach((obj) => {
    const bodyRow = document.createElement('tr');
    tbody.appendChild(bodyRow);
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      bodyRow.setAttribute(key, obj[key]);
      const bodyCell = document.createElement('td');
      bodyCell.textContent = obj[key];
      bodyRow.appendChild(bodyCell);
    });
  });
  return table;
}
