// memory cost
document.getElementById('memory-8GB').addEventListener('click', function(){
    updateProductCost('memory', 0)
    totalPrice()
});
document.getElementById('memory-16GB').addEventListener('click',function(){
    updateProductCost('memory', 180)
    totalPrice()
});
// storage cost
document.getElementById('storage-256').addEventListener('click',function(){
    updateProductCost('storage', 0)
    totalPrice()
});
document.getElementById('storage-512').addEventListener('click',function(){
    updateProductCost('storage', 100)
    totalPrice()
});
document.getElementById('storage-1TB').addEventListener('click',function(){
    updateProductCost('storage', 180)
    totalPrice()
});
// delivery charge cost
document.getElementById('free-delivery').addEventListener('click',function(){
    updateProductCost('delivery', 0)
    totalPrice()
});
document.getElementById('charged-delivery').addEventListener('click',function(){
    updateProductCost('delivery', 20)
    totalPrice()
});
// update product cost use function
function updateProductCost(product ,cost){
    const previousProductCost= document.getElementById( product + '-cost');
    previousProductCost.innerText = cost;
    return cost;
    
}
function totalPrice(){
    const bestPrice =  document.getElementById('best-price');
    const updateBestPrice = Number(bestPrice.innerText) ;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updateBestPrice + updateProductCost() ;
    console.log(totalPrice)
}
         




