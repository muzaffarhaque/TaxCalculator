$(document).ready(function () {
  $('#taxForm').submit(function (event) {
    event.preventDefault();
    calculateTax();
  });

  $('#closeBtn').click(function () {
    $('#resultModal').hide();
  });
});

function calculateTax() {
  var grossIncome = parseFloat($('#grossIncome').val());
  var extraIncome = parseFloat($('#extraIncome').val());
  var ageGroup = $('#ageGroup').val();
  var deductions = parseFloat($('#deductions').val());
  var totalIncome = grossIncome + extraIncome - deductions;
  var tax = 0;

  if (totalIncome > 800000) {
    var taxableAmount = totalIncome - 800000;
    if (ageGroup === '<40') {
      tax = taxableAmount * 0.3;
    } else if (ageGroup === '>=40&<60') {
      tax = taxableAmount * 0.4;
    } else if (ageGroup === '>=60') {
      tax = taxableAmount * 0.1;
    }
  }

  $('#result').text(totalIncome - tax);
  $('#resultModal').show();
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})