// from data.js
var tableData = data;
var tbody = d3.select("tbody");
tableData.forEach(AddRow);
function AddRow(item){
    var row = tbody.append("tr");
    var UFO = Object.values(item);
    UFO.forEach(data =>{
        row.append('td').text(data)
    })
};
// data.forEach((weatherReport) => {
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(UFO1 => UFO1.datetime === inputValue);
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    console.log(filteredData);
    filteredData.forEach(AddRow);
  });
// button.on("click", function() {
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");
//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);
//   console.log(tableData);
//   var filteredData = tableData.filter(person => person.bloodType === inputValue);
//   console.log(filteredData);
// })