function updatePrintCount() {
    var printCountInput = document.getElementById('printCountInput');
    var inputValue = printCountInput.value.trim();

    //Extract the numerical part form the input value
    var numericPart = inputValue.match(/\d+/);
    var printCountNumeric = parseInt(numericPart[0], 10);
    var numericPart = inputValue
}