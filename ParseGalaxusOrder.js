const getDate = () => {
  const title = document.querySelector("#pageContent > h1").textContent;
  const dateMatch = title.match(/\d{1,2}\/\d{1,2}\/\d{4}/);

  if (dateMatch) {
    const date = dateMatch[0]; // Extracted date
    return date.split("/").reverse().join("-");
  } else {
    console.error("No date found");
  }
};

const getTotalPrices = () => {
  const totalPrices = document.querySelectorAll(".totalPrice");
  return Array.from(totalPrices).map((price) => {
    const match = price.textContent.match(/CHF(\d+\.\d+)/);
    return "-" + (match ? match[1] : price.textContent);
  });
};

const getDesciptions = () => {
  const descriptions = document.querySelectorAll(
    "div:has(+ * + div.deliveryState)"
  );
  return Array.from(descriptions).map((description) => description.textContent);
};

const getTableData = () => {
  const descriptions = getDesciptions();
  const totalPrices = getTotalPrices();
  const date = getDate();
  const data = [];

  for (let i = 0; i < descriptions.length; i++) {
    data.push({
      date,
      description: descriptions[i],
      totalPrice: totalPrices[i],
    });
  }

  console.log(data);
  return data;
};

const createTable = (data) => {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.marginTop = "20px";
  table.id = "galaxus-order-table";

  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");
    ["date", "description", "totalPrice"].forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];
      td.style.border = "none";
      td.style.padding = "8px";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
};

// Add focus and selection functionality
const focusAndSelectTable = () => {
  const tableElement = document.querySelector("#galaxus-order-table");
  if (tableElement) {
    // Create a range object and select the table contents
    const range = document.createRange();
    range.selectNodeContents(tableElement);

    // Create a selection object and add the range to it
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    console.log("Table content focused and selected");
  } else {
    console.error("Table element not found");
  }
};

const insertTable = () => {
  const data = getTableData();
  const table = createTable(data);
  const targetElement = document.querySelector("#pageContent > h1");
  if (targetElement) {
    targetElement.insertAdjacentElement("afterend", table);
  } else {
    console.error("Target element not found");
  }

  // Call the function after a short delay to ensure the table is in the DOM
  setTimeout(focusAndSelectTable, 100);
};

insertTable();
