const afterPrintHandler = () => {
    document.getElementById('printBtn').style.display = 'block';
    document.getElementById('selections').style.display = 'block'
}

const printContent = () => {
    // Hide the print button before printing
    document.getElementById('printBtn').style.display = 'none';
    document.getElementById('selections').style.display = 'none'

    // Attach the event listener for afterprint
    window.addEventListener('afterprint', afterPrintHandler);

    // Trigger the print dialog
    window.print();
}

document.addEventListener('DOMContentLoaded', function() {
 
    // Select all elements with class checkBox
    var options = document.querySelectorAll('.option');

    // Iterate over each checkBox element
    options.forEach(function(checkBox) {
        // Add click event listener to each checkBox element
        checkBox.addEventListener('click', function() {
            // Select the input checkbox within the clicked checkBox element
            var inputCheckbox = checkBox.querySelector('input[type="checkbox"]');
            
            // Toggle the checked state of the input checkbox if it exists
            if (inputCheckbox) {
                inputCheckbox.checked = !inputCheckbox.checked;
            }
        });
    });
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
            
            // Add Pesos sign before the first number
            if (!value.startsWith('₱')) {
                value = '₱ ' + value;
            }
            // Add 00 number after the last number
            if (!value.endsWith('.00')) {
                value = value + '.00';
            }
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
            window.location.href = '../forms/budgetRequestForm.html';
            break;
        case '2':
            window.location.href = '../forms.html';
            break;
        case '3':
            window.location.href = '../forms/investment.html';
            break;
        case '4':
            window.location.href = '../forms/seller.html';
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