const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

function writeObjectsToExcel(objects, filePath) {
  // Check if objects is an array of objects
  if (!Array.isArray(objects) || objects.length === 0) {
    throw new Error('Invalid input: objects must be a non-empty array of objects.');
  }

  // Extract the keys (headers) from the first object
  const headers = Object.keys(objects[0]);

  // Add headers to the worksheet
  worksheet.addRow(headers);

  // Add data from each object to the worksheet
  objects.forEach((obj) => {
    const rowData = headers.map((header) => obj[header]);
    worksheet.addRow(rowData);
  });

  // Save the Excel file
  return workbook.xlsx.writeFile(filePath)
    .then(() => {
      console.log(`Excel file "${filePath}" created successfully.`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Example usage:
const data = [
  { name: 'John', age: 30, country: 'USA' , phone: 12412 , house: "ewre" },
  { name: 'Alice', age: 25, country: 'Canada' , phone: 2242 },
  { name: 'Bob', age: 35, country: 'UK' , phone: 24212 },
];

writeObjectsToExcel(data, 'data.xlsx');
