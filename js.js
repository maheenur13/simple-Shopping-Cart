document.getElementById('plusItem').addEventListener('click', function() {
    increasingItems('inputValue');
    mobilePriceIncrease('phonePrice');
    subTotalIncrease();
})
document.getElementById('decreaseItem').addEventListener('click', function() {
    // console.log('decreases');
    decreaseItem('inputValue');
    mobilePriceDecrease('phonePrice');
    subTotaldecrease();
})
document.getElementById('caseIncrease').addEventListener('click', function() {
    increasingItems('caseInput');
    casePriceIncrease('casePrice');
    subTotalIncrease();
})
document.getElementById('caseDec').addEventListener('click', function() {
    decreaseItem('caseInput');
    casePriceDecrease('casePrice');
    subTotaldecrease();
})

function convertAllItems(id) {
    let itemValue = id.innerText;
    let itemPrice = parseInt(itemValue);
    return itemPrice;
}

function subTotalIncrease() {
    let phonePrice = document.getElementById('phonePrice');
    let updatePhonePrice = convertAllItems(phonePrice);
    let casePrice = document.getElementById('casePrice');
    let updateCasePrice = convertAllItems(casePrice);
    let finalPrice = updatePhonePrice + updateCasePrice;
    let total = document.getElementById('subTotal');
    total.innerText = finalPrice;
}

function subTotaldecrease() {
    let phonePrice = document.getElementById('phonePrice');
    let updatePhonePrice = convertAllItems(phonePrice);
    let casePrice = document.getElementById('casePrice');
    let updateCasePrice = convertAllItems(casePrice);
    let finalPrice = (updatePhonePrice - (-updateCasePrice))
    let total = document.getElementById('subTotal');
    total.innerText = finalPrice;
}

function casePriceIncrease(casePrice) {
    let caseGet = document.getElementById(casePrice);
    let updateValue = convertAllItems(caseGet);
    console.log(updateValue);
    let finalPrice = updateValue + 59;
    caseGet.innerText = finalPrice;
}

function casePriceDecrease(casePrice) {
    let caseGet = document.getElementById(casePrice);
    let updateValue = convertAllItems(caseGet);
    if (updateValue >= 1) {
        let finalPrice = updateValue - 59;
        caseGet.innerText = finalPrice;
    } else {
        let value = 00;
        caseGet.innerText = value;
    }
}

function mobilePriceIncrease(phonePrice) {
    let phoneValue = document.getElementById(phonePrice);
    let updateValue = convertAllItems(phoneValue);
    let finalPrice = updateValue + 1219;
    phoneValue.innerText = finalPrice;
    return finalPrice;
}

function mobilePriceDecrease(phonePrice) {
    let phoneValue = document.getElementById(phonePrice);
    let updateValue = convertAllItems(phoneValue);
    if (updateValue <= 0) {
        let value = 00;
        phoneValue.innerText = value;
    } else {
        let finalPrice = updateValue - 1219;
        phoneValue.innerText = finalPrice;
    }
}

function decreaseItem(id) {
    let decItem = document.getElementById(id);
    let convertInt = parseInt(decItem.value);
    if (convertInt >= 1) {
        let newCount = convertInt - 1;
        decItem.value = newCount;
    } else {
        let item = 0;
        decItem.value = item;
    }
}



function increasingItems(id) {
    let item = document.getElementById(id);
    let increaseItem = parseInt(item.value);
    let newCount = increaseItem + 1;
    item.value = newCount;
}