// for of loop is very simple and small
const numbers = [12, 15, 44, 34, 96];
for (let number of numbers) {
    //console.log(number);
}


// find lowest budget phone using function,, all word is case sensitive
const products = [
    { id: 1, name: 'iphone', price: 80000 },
    { id: 2, name: 'asus laptop', price: 60000 },
    { id: 1, name: 'samsung phone', price: 15000 },
    { id: 1, name: 'dell laptop', price: 50000 },
    { id: 1, name: 'button Phone', price: 3000 },
];
// for (let product of products) {
//     console.log(product);
// }
function matchproducts(products, search) {
    matched = [];
    for (const product of products) {
        // name er moddhe jodi kono uppercase thake tahole seta skip korbe karon case sensitive,, last er name er Phone boro hater thakay skip koreche eijonno agei lowercase kore nite hobe
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
// Function theke kono kichu return na korle undefined dekhay
const result = matchproducts(products, 'laptop');
console.log(result);