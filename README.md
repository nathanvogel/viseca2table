# viseca2table

Parse VisecaOne transactions to a table that can be copy-pasted into Excel or Google Sheets

This script can be embedded as a bookmarklet in your browser.
Just click on it to generate a table that you can copy-paste in Excel or Google Sheets.
This works only on [https://one.viseca.ch/transactions](https://one.viseca.ch/transactions).

Drag and drop this link to your bookmark bar:

[VisecaOne to Table][1]

And click on it when the list of transactions you want to copy is displayed.
If you want transactions from multiple pages, go to the next page and click again to add the transactions of the new page.
Copy-paste your table!

[1]: javascript:(function()%7Bvar%20tN%20%3D%20document.getElementsByClassName(%22name%22)%3Bvar%20tD%20%3D%20document.getElementsByClassName(%22transaction-date%22)%3Bvar%20tA%20%3D%20document.querySelectorAll('%5Bdata-ng-bind%3D%22transaction.amount%20%7C%20number%3A%202%22%5D')%3Bvar%20columns%20%3D%20%5BtD%2C%20tA%2C%20tN%5D%3Bfunction%20createTable()%20%7Bvar%20myTableDiv%20%3D%20document.getElementById(%22main%22)%3Bvar%20table%20%3D%20document.createElement(%22TABLE%22)%3Btable.border%20%3D%20%221%22%3Btable.id%20%3D%20%22visecasummarytable%22%3Bvar%20tableBody%20%3D%20document.createElement(%22TBODY%22)%3Btable.appendChild(tableBody)%3BmyTableDiv.insertBefore(table%2C%20myTableDiv.firstChild)%3Breturn%20tableBody%3B%7Dfunction%20addTable()%20%7Bvar%20table%20%3D%20document.getElementById(%22visecasummarytable%22)%3Bvar%20tableBody%3Bif%20(table)%20%7BtableBody%20%3D%20table.getElementsByTagName(%22tbody%22)%5B0%5D%3B%7D%20else%20%7BtableBody%20%3D%20createTable()%3B%7Dfor%20(var%20i%20%3D%200%3B%20i%20%3C%20tN.length%3B%20i%2B%2B)%20%7Bvar%20tr%20%3D%20document.createElement(%22TR%22)%3BtableBody.appendChild(tr)%3Bfor%20(var%20j%20%3D%200%3B%20j%20%3C%20columns.length%3B%20j%2B%2B)%20%7Bvar%20td%20%3D%20document.createElement(%22TD%22)%3Btd.width%20%3D%20%2275%22%3Btd.appendChild(document.createTextNode(columns%5Bj%5D%5Bi%5D.textContent))%3Btr.appendChild(td)%3B%7D%7D%7DaddTable()%7D)()
