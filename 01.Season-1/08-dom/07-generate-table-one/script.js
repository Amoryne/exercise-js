// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let target = document.getElementById('target')

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody=document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
target.appendChild(table);
})();
