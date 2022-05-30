(function () {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return year[this.getFullYear()];
  };
})();

var now = new Date();

var year = now.getFullYear();
var month = now.getMonthName();

var date_div = document.getElementById("date");
date_div.innerHTML = month + "\t" + year;
