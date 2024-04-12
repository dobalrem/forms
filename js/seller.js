// Update print count
const updatePrintCount = () => {
    const printCountInput = document.getElementById("printCountInput");
    const inputValue = printCountInput.value.trim();
    
    // Extract the numerical part from the input value
    const numericPart = inputValue.match(/\d+/);
    let printCountNumeric = parseInt(numericPart[0], 10);
    // Increment the numerical part
    printCountNumeric++;

    // Format the incremented numerical part to have leading zeros
    const incrementedNumericString = ('000000' + printCountNumeric).slice(-5);

    // Construct the new print count string with the same prefix
    const printCountString = inputValue.replace(/\d+/, incrementedNumericString);

    // Update the input value
    printCountInput.value = printCountString;

    // Update localStorage
    localStorage.setItem('printSellerCount', printCountNumeric.toString());
};

// Initialize print count
let printSellerCount = parseInt(localStorage.getItem('printSellerCount'), 10);
if (isNaN(printSellerCount)) {
    printSellerCount = 0;
}

// Function to handle afterprint event
const afterPrintHandler = () => {
    updatePrintCount();
    // Show the print button again
    document.getElementById("printBtn").style.display = 'inline-block';
    document.getElementById('selections').style.display = 'block';
};

// Function to print the content
const printContent = () => {
    // Hide the print button when printing
    document.getElementById("printBtn").style.display = 'none';
    document.getElementById('selections').style.display = 'none';
    // Attach the event listener for afterprint
    window.addEventListener('afterprint', afterPrintHandler);
    // Trigger the print dialog
    window.print();
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize print count
    const printCountInput = document.getElementById("printCountInput");
    printCountInput.value = `${('00000' + printSellerCount).slice(-5)}`;
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all input elements with class 'number-input'
    const numberInputs = document.querySelectorAll('.number-input');
    
    // Add event listener to each input element
    numberInputs.forEach(input => {
        input.addEventListener('blur', () => {
            // Get the current value of the input
            let value = input.value;
            
            // Remove any existing commas from the value
            value = value.replace(/,/g, '');
            
            // Format the value with commas
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            // Update the value of the input
            input.value = value;
        });
    });
});

const selectForms = () => {
    const selectElement = document.getElementById('forms');
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case '1':
            window.location.href = '../forms/seller.html';
            break;
        case '2':
            window.location.href = '../forms.html';
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
};


