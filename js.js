document.getElementById('plusItem').addEventListener('click', function() {
    let newCount = increasingItems('inputValue');
    mobilePriceIncrease('phonePrice');
})
document.getElementById('decreaseItem').addEventListener('click', function() {
    // console.log('decreases');
    decreaseItem('inputValue');

})
document.getElementById('caseIncrease').addEventListener('click', function() {
    increasingItems('caseInput');
})

document.getElementById('caseDec').addEventListener('click', function() {
    decreaseItem('caseInput');
})

function mobilePriceIncrease(phonePrice) {
    let phoneValue = document.getElementById(phonePrice);
    let updateValue = phoneValue.innerText;
    let convertPhonePrice = parseInt(updateValue);
    console.log(convertPhonePrice);
    let finalPrice = convertPhonePrice + convertPhonePrice;
    phoneValue.innerText = finalPrice;

}

function decreaseItem(id) {
    let decItem = document.getElementById(id);
    let convertInt = parseInt(decItem.value);
    let newCount = convertInt - 1;
    decItem.value = newCount;
}



function increasingItems(id) {
    let item = document.getElementById(id);
    let increaseItem = parseInt(item.value);
    let newCount = increaseItem + 1;
    item.value = newCount;
    // mobilePriceIncrease(id,newCount);
    return newCount;

}