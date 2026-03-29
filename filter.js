const data = [
    {
        id: 1,
        name: "Giordano Modern Square Face  Watch",
        img: "https://m.media-amazon.com/images/I/51ghlA3GBKL._SX679_.jpg",
        price: 4499,
        cat: "Casual",
    },
    {
        id: 2,
        name: "Daniel Hetcher Paris Bercy Collection",
        img: "https://m.media-amazon.com/images/I/71Ozj5O+fEL._SX679_.jpg",
        price: 2799,
        cat: "Casual",
    },
    {
        id: 3,
        name: "Fastrack Street line Quartz Watch",
        img: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45aa75c1/images/Fastrack/Catalog/68029PP02_1.jpg?sw=600&sh=600",
        price: 2995,
        cat: "Sports",
    },
    {
        id: 4,
        name: "Titan Men's Timeless Charm",
        img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwca4ce4e1/images/Titan/Catalog/1729SL02_2.jpg?sw=600&sh=600",
        price: 1995,
        cat: "Dress",
    },
      {
        id: 5,
        name: "Casio G-Shock Men G-Lide Watch",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQN_kgnGbyDB4JCyQ3n-fcIZfi1QnY-tD8Jqi2nbPCjOLkJWnsYA3qiJhFl4TtvjyCidhOzAkp-h-ig7H62rQG1MbiF_DMu7a_VbmHNK_opQz8hmzilZdzJe6A",
        price: 11996,
        cat: "Sports",
    },
      {
        id: 6,
        name: "Titan Workwear Men's Quartz Watch",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzT0Dk8SiM0DA0C27C9jBg-TR3Gsq_MBqTf5cR4OjqwqcJHOMAEW-FaAklB73nlfDT0ITWavvPgvbHS6LzJ-QD5E9RE53ibkHordjZf60_Wwo8EhhcyU_LIA",
        price: 7000,
        cat: "Dress",
    }
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
        .map(
            (product) => `
                <div class="product">
                    <img src="${product.img}" alt="" />
                    <span class="name">${product.name}</span>
                    <span class="priceText">₹${product.price}</span>
                </div>
            `
        )
        .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e)=>{
    const value = e.target.value.toLowerCase();

    if(value){

        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))

    }else{
        displayProducts(data);
    }

});

const setCategories = ()  =>{
    const allCats = data.map((item) => item.cat);
    const categories = [
         "All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
     }),
];

categoriesContainer.innerHTML = categories.map(cat=>
   `<span class = "cat">${cat}</span>`).join("") 

   categoriesContainer.addEventListener("click",(e)=>{
    const selectedCat = e.target.textContent;

    selectedCat === "All"
    ? displayProducts(data)
    :displayProducts(data.filter((item) => item.cat === selectedCat));

   });

    
};

const setPrices = ()=>{
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice
    priceValue.textContent = "₹" + maxPrice

    priceRange.addEventListener("input",(e)=>{
    priceValue.textContent = "₹" + e.target.value;
    displayProducts(data.filter(item=>item.price <= e.target.value))
    });

};

setCategories();
setPrices()



