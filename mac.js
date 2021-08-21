// memory cost button
document.getElementById('memory-8GB').addEventListener('click', function(){
    updateProductCost('memory', 0)
});
document.getElementById('memory-16GB').addEventListener('click',function(){
    updateProductCost('memory', 180)
});
// storage cost button
document.getElementById('storage-256').addEventListener('click',function(){
    updateProductCost('storage', 0)
});
document.getElementById('storage-512').addEventListener('click',function(){
    updateProductCost('storage', 100)
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    updateProductCost('storage', 180)
});
// delivery charge cost button
document.getElementById('free-delivery').addEventListener('click',function(){
    updateProductCost('delivery', 0)
});
document.getElementById('charged-delivery').addEventListener('click',function(){
    updateProductCost('delivery', 20)
});

// update product cost use function
function updateProductCost(product ,cost){
    const previousProductCost= document.getElementById( product + '-cost');
    previousProductCost.innerText = cost; 
    totalPrice()
    calculateTotal()
}
// get product cost
function getCost(type){
    const typeCost = document.getElementById( type +'-cost') ;
    const typeCostText = Number(typeCost.innerText);
    return typeCostText ;
}
// calculate total price
function totalPrice(){
    const bestPrice = document.getElementById('best-price').innerText;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = Number(totalPrice.innerText);
    totalPrice.innerText = Number(bestPrice) + getCost('memory') +  getCost('storage') +  getCost('delivery');
    return totalPriceText;
}
// calculate Total 
function calculateTotal(){
    const total = document.getElementById('total');
    total.innerText = totalPrice()
}

// add promo code 
document.getElementById('apply').addEventListener('click', function(event){
    const promoCodeInput = document.getElementById('promo-code');
    const promoCodeText = promoCodeInput.value;
     const total = document.getElementById('total');
     total.innerText = totalPrice()
    if ( promoCodeText=='stevekaku'){
        const discount = totalPrice() - Number(totalPrice())*0.2;
        total.innerText = discount;
        promoCodeInput.value = '';
        event.target.setAttribute('disabled',true)
    }
     else{
        document.getElementById('error-msg').style.display = 'block';
        promoCodeInput.value = '';
    }
})




























// function totalPrice(){
//     getPrice('best')
//     getPrice('total')
// }
//      function getPrice(price){
//         const productPrice =  document.getElementById( price +'-price');
//         const updateProductPrice = productPrice.innerText;
//         productPrice.innerText = Number(updateProductPrice) + (updateProductCost());
//      }    




