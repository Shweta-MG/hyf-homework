console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products){
// append 'ul' child

const body = document.getElementById("body");
const ulList = document.createElement("ul");
body.appendChild(ulList);

//append content in ul
for (let product of products){

    //append 'li' in 'ul'
    const liContent = document.createElement("li");
    ulList.appendChild(liContent);

    //append product name as header in list content
    const liHeader = document.createElement("h1");
    liHeader.innerHTML = product.name;
    liContent.appendChild(liHeader);

    //append product price as content of list
    const liPrice = document.createElement("div")
    liPrice.innerHTML = `Price: - ${product.price}`;
    liContent.appendChild(liPrice)

    //append product rating as content of list
    const liRating = document.createElement("div");
    liRating.innerHTML = `Rating - ${product.rating}`;
    liContent.appendChild(liRating)
}
}
renderProducts(products);