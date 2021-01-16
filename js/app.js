// navbar footer items hover effect
const footerItem = document.querySelectorAll(".hero-foot li");

footerItem.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        e.target.classList.add("is-active");
    })
    item.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("is-active");
    })
});

//navbar burger menu
// const navbarBurger = document.querySelector(".navbar-burger");
// const navbarMenu = document.querySelector(".navbar-menu");
// const navbarItens = document.querySelectorAll(".navbar-item");

// navbarBurger.addEventListener("click", () => {
//     navbarMenu.classList.toggle("is-active");
//     navbarItens.forEach(item => {
//         item.addEventListener("click", () => {
//             navbarMenu.classList.remove("is-active");
//         })
//     })
// })

//Tabs navigation
const tabs = document.querySelectorAll(".tabs li")
const tabContentBoxes = document.querySelectorAll("#tab-content > div")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("is-active"));
        tab.classList.add("is-active");

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute("id") === target){
                box.classList.remove("is-hidden");
            }else {
                box.classList.add("is-hidden");
            }
        })
    });
});

//Conquistas Dropdown
const dropdownConquistas = document.querySelector("#dropdown-conquistas")
const dropdownConquistasItens = document.querySelectorAll(".dropdown-item") 
const dropdownConquistasDivs = document.querySelectorAll(".tall")
const dropdownTile = document.querySelector("#dropdown-tile")

dropdownConquistas.addEventListener("click", () => {
    dropdownConquistas.classList.toggle("is-active");
})

dropdownConquistasItens.forEach(item => {
    item.addEventListener("click", () => {
        const year = item.dataset.year
        //console.log(year)
        dropdownConquistasDivs.forEach(div => {
            if(div.getAttribute("id") === year){
                div.classList.remove("is-hidden");
            }else {
                div.classList.add("is-hidden")
            }
        })
    })
})
    
   