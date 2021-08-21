// memory cost
document.getElementById('memory-8GB').addEventListener('click', function(){
    updateProductCost('memory', 0)
});
document.getElementById('memory-16GB').addEventListener('click',function(){
    updateProductCost('memory', 180)
});
// storage cost
document.getElementById('storage-256').addEventListener('click',function(){
    updateProductCost('storage', 0)
});
document.getElementById('storage-512').addEventListener('click',function(){
    updateProductCost('storage', 100)
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    updateProductCost('storage', 180)
});
// delivery charge cost
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

    // const memoryCost = document.getElementById('memory-cost').innerText ;
    // const storagCost = document.getElementById('storage-cost').innerText;
    // const deliveryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = Number(bestPrice) + getCost('memory') +  getCost('storage') +  getCost('delivery');
}
// get product cost
function getCost(type){
    const typeCost = document.getElementById( type +'-cost') ;
    const typeCostText = Number(typeCost.innerText);
    return typeCostText ;
}




























// function totalPrice(){
//     getPrice('best')
//     getPrice('total')
// }
//      function getPrice(price){
//         const productPrice =  document.getElementById( price +'-price');
//         const updateProductPrice = productPrice.innerText;
//         productPrice.innerText = Number(updateProductPrice) + (updateProductCost());
//      }    




