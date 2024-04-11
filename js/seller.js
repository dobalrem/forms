function updatePrintCount() {
    var printCountInput = document.getElementById("printCountInput");
    var inputValue = printCountInput.value.trim();
    
    // Extract the numerical part from the input value
    var numericPart = inputValue.match(/\d+/);
    var printCountNumeric = parseInt(numericPart[0], 10);
    var numericPart = inputValue
    // Increment the numerical part
    printCountNumeric++;

    // Format the incremented numerical part to have leading zeros
    var incrementedNumericString = ('000000' + printCountNumeric).slice(-5);

    // Construct the new print count string with the same prefix
    var printCountString = inputValue.replace(/\d+/, incrementedNumericString);

    // Update the input value
    printCountInput.value = printCountString;

    // Update localStorage
    localStorage.setItem('printCount', printCountNumeric.toString());
}

// Initialize print count
var printCount = parseInt(localStorage.getItem('printCount'), 10); // Retrieve print count from localStorage
if (isNaN(printCount)) {
    printCount = 0; // Set default value if printCount is not a number or is null
}

// Function to handle afterprint event
function afterPrintHandler() {
    updatePrintCount();
    // Show the print button again
    document.getElementById("printBtn").style.display = 'inline-block';
    document.getElementById('selections').style.display = 'block'
}

// Function to print the content
function printContent() {
    // Hide the print button when printing
    document.getElementById("printBtn").style.display = 'none';
    document.getElementById('selections').style.display = 'none'
    // Attach the event listener for afterprint
    window.addEventListener('afterprint', afterPrintHandler);

    // Trigger the print dialog
    window.print();
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize print count
    var printCountInput = document.getElementById("printCountInput");
    printCountInput.value = '' + ('00000' + printCount).slice(-5);
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all input elements with class 'number-input'
    var numberInputs = document.querySelectorAll('.number-input');
    
    // Add event listener to each input element
    numberInputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            // Get the current value of the input
            var value = input.value;
            
            // Remove any existing commas from the value
            value = value.replace(/,/g, '');
            
            // Format the value with commas
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            // Update the value of the input
            input.value = value;
        });
    });
});



function selectForms() {
    const selectElement = document.getElementById('forms');
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case '1':
            window.location.href = '../forms/seller.html';
            break;
        case '2':
            window.location.href = '../index.html';
            break;
        case '3':
            window.location.href = '../forms/budgetRequestForm.html';
            break;
        case '4':
            window.location.href = '../forms/investment.html';
            break;
        case '5':
            window.location.href = '../forms/cashVoucher.html';
            break;
        case '6':
            window.location.href = '../forms/checkVoucher.html';
            break;
        default:
            // Default action if none of the cases match
            break;
    }
}
