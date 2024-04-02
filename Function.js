let product_section = document.querySelector("#products");

//appeding new element in section

let products = [
    {
        product_name : "Shanti Avola",
        product_company : "Dabar",
        product_price: "200",
        product_color : "green",
        product_discount: "20%"
    },
    {
        product_name : "Neem avola",
        product_company : "bavera",
        product_price: "130",
        product_color : "red",
        product_discount: "10%"
    },
    {
        product_name : "Water bottel",
        product_company : "kinley",
        product_price: "30",
        product_color : "transparemnt",
        product_discount: "5%"
    },
    {
        product_name : "Dry Fruit",
        product_company : "Medha",
        product_price: "150",
        product_color : "brown",
        product_discount: "30%"
    },
    {
        product_name : "Speaking toy",
        product_company : "Razor",
        product_price: "130",
        product_color : "Orange",
        product_discount: "40%"
    },
    {
        product_name : "Digital Watch",
        product_company : "Krishna",
        product_price: "120",
        product_color : "white",
        product_discount: "25%"
    }
];

let product_obj = products[0];

function add_product(product_obj,id){
    //crettion of element
    let pro =  document.createElement("div");
    
    //changing the inner html of new div
    pro.innerHTML = `<div id="${id}" class="card">
    <div class="inner_card">
    <ul>
    <li>Product name : ${product_obj.product_name}</li>
    <li>product Company : ${product_obj.product_company}</li>
    <li>product color : ${product_obj.product_color}</li>
    <li>product price: ${product_obj.product_price}</li>
    <li>product Discount: ${product_obj.product_discount} off</li>
    </ul>
    </div>
    </div>`;
    product_section.prepend(pro);
}

function add_all_products(products){
    for(let i=0;i<products.length;i++){
        add_product(products[i],i); 
        console.log(i);  
    }
}

add_all_products(products);