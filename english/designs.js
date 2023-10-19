
const designsContainer = document.querySelector(".designs")
const loading = document.querySelector(".loading")
const data=[
    {
        id:1,
        img: "../img/d1.avif",
        code: "A01",
        name: "name",
        price: "1700 birr"
    },
    {
        id:2,
        img: "../img/11.jpg",
        code: "A02",
        name: "name",
        price: "1700 birr"
    },
    {
        id:3,
        img: "../img/12.jpg",
        code: "A03",
        name: "name",
        price: "1400 birr"
    },
    {
        id:4,
        img: "../img/13.jpg",
        code: "A04",
        name: "name",
        price: "1400 birr"
    },
    {
        id:5,
        img: "../img/d5.avif",
        code: "A05",
        name: "name",
        price: "1900 birr"
    },
    {
        id:6,
        img: "../img/14.jpg",
        code: "A06",
        name: "name",
        price: "1800 birr"
    },
    {
        id:7,
        img: "../img/15.jpg",
        code: "A07",
        name: "name",
        price: "1700 birr"
    },
    {
        id:8,
        img: "../img/16.jpg",
        code: "A08",
        name: "name",
        price: "1700 birr"
    },
    {
        id:9,
        img: "../img/17.jpg",
        code: "A09",
        name: "name",
        price: "2200 birr"
    },
    {
        id:10,
        img: "../img/20.jpg",
        code: "A10",
        name: "name",
        price: "1800 birr"
    },
    {
        id:11,
        img: "../img/18.jpg",
        code: "A11",
        name: "name",
        price: "1800 birr"
    },
    {
        id:12,
        img: "../img/19.jpg",
        code: "A12",
        name: "name",
        price: "1800 birr"
    },
]




data.map((item=>{
    const {name,code,price,img} = item
    const article = document.createElement("article")
    article.classList.add("design")
    const design =    ` <div class='img-container'>
                        <img src="${img}" alt=""/>
                        </div>
                        <div class='design-footer'>
                        <h4>Code ${code}</h4>
                        <p>price: ${price}</p>
                        </div> `
    article.innerHTML= design
    designsContainer.appendChild(article)                
}))  

loading.remove()