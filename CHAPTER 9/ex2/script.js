let productsArray;
if(localStorage.getItem('products') == null) {
    productsArray = []
} else {
    let json = localStorage.getItem('products');
    productsArray = JSON.parse(json)
}

function basket() {
    let elements = document.querySelector('h3');
    
    for (let elem of elements) {
        console.log(elem)
    }
}