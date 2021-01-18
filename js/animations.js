console.log("Boxes animation are on boxes.js")

const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)
window.addEventListener("scroll", () => {
    let windowMaxScrollY = window.scrollMaxY
    let currentScrollY = window.scrollY
    console.log(`${currentScrollY} de ${windowMaxScrollY}`)
    //o valor the scrollY é independente do device
    if (scrollY <= 800){
        document.querySelector("body").style.backgroundColor = "white";
    } else if (scrollY > 800 && scrollY <= 1600){
        document.querySelector("body").style.backgroundColor = "teal";
    } else if (scrollY > 1600 && scrollY <= 2400){
        document.querySelector("body").style.backgroundColor = "yellow";
    } else if (scrollY > 2400 && scrollY <= 3200){
        document.querySelector("body").style.backgroundColor = "pink";
    }
})

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 7 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom){
            box.classList.add("show");
        }else {
            box.classList.remove("show");
        }
    })
}



console.log("Red Arrows are on")

const redArrows = document.querySelectorAll(".left-arrow")

redArrows.forEach(arrow => {
    //anymation event
    arrow.addEventListener("click", () => {
        
        let currentSection = arrow.parentElement.parentElement.parentElement.parentElement
        currentSection.classList.toggle("section-spin")

        let nextSiblingSection = arrow.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
        // The timing function should be CSS
        setTimeout( () => {nextSiblingSection.classList.toggle("is-hidden")}, 1500)    
        
    })
})


