var tN = document.getElementsByClassName("name");
var tD = document.getElementsByClassName("transaction-date");
var tA = document.querySelectorAll(
  '[data-ng-bind="transaction.amount | number: 2"]'
);

var columns = [tD, tA, tN];

function createTable() {
  var myTableDiv = document.getElementById("main");
  var table = document.createElement("TABLE");
  table.border = "1";
  table.id = "visecasummarytable";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  myTableDiv.insertBefore(table, myTableDiv.firstChild);
  return tableBody;
}

function addTable() {
  var table = document.getElementById("visecasummarytable");
  var tableBody;
  if (table) {
    tableBody = table.getElementsByTagName("tbody")[0];
  } else {
    tableBody = createTable();
  }

  for (var i = 0; i < tN.length; i++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < columns.length; j++) {
      var td = document.createElement("TD");
      td.width = "75";
      td.appendChild(document.createTextNode(columns[j][i].textContent));
      tr.appendChild(td);
    }
  }
}

addTable();
