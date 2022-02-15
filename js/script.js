function updateProductNumber(product, price, isIncreasing) {
    // increase or decrease phone number 
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update total price 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate Total 
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber
}

// Calculate total function 
function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('iphone') * 1219;

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value);
    const caseTotal = getInputValue('case') * 59;
    const subTotal = (phoneTotal + caseTotal);
    // console.log(subTotal);
    // tax amount calculation 
    const taxAmount = ((subTotal * 10) / 100);
    const totalPrice = subTotal + taxAmount;
    // update on the HTML 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total').innerText = totalPrice;
}


//increase or decrease case number 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    /* 
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    */
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    /* 
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; 
    */
})

document.getElementById('iphone-plus').addEventListener('click', function () {
    updateProductNumber('iphone', 1219, true);

    // get input number of phone 
    /*     
    const iphoneInput = document.getElementById('iphone-number');
    const iphoneNumber = iphoneInput.value;
    iphoneInput.value = parseInt(iphoneNumber) + 1; 
    */
})
//increase or decrease phone number 
document.getElementById('iphone-minus').addEventListener('click', function () {
    updateProductNumber('iphone', 1219, false);
    /*     
    const iphoneInput = document.getElementById('iphone-number');
    const iphoneNumber = iphoneInput.value;
    iphoneInput.value = parseInt(iphoneNumber) - 1; 
    */

})