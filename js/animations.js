console.log("Boxes animation are on boxes.js")

const boxes = document.querySelectorAll(".box")
window.addEventListener("scroll", checkBoxes)
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

const opacity = document.querySelectorAll(".opacity")
window.addEventListener("scroll", gainOpacity)
gainOpacity()

function gainOpacity(){
    const triggerBottom = window.innerHeight / 7 * 4;
    opacity.forEach(opc => {
        const boxTop = opc.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom){
            opc.classList.add("full");
        }else {
            opc.classList.remove("full");
        }
    })
}

window.addEventListener("scroll", () => {
    const body = document.querySelector("body")
    console.log(window.scrollY)
    console.log(window.scrollMaxY)
    // console.log(body.scrollHeight)
    // console.log(window.innerHeight)
    if (window.scrollY / window.scrollMaxY >= 0.10){
        body.style.backgroundColor = "red";
    }
})



console.log("Red Arrows are on")

const redArrows = document.querySelectorAll(".left-arrow")

redArrows.forEach(arrow => {
    //anymation event
    arrow.addEventListener("click", () => {
        
        let currentSection = arrow.parentElement.parentElement.parentElement.parentElement
        currentSection.classList.toggle("section-spin")

        let nextSiblingSection = arrow.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
        // The timing function should be CSS
        // setTimeout( () => {nextSiblingSection.classList.toggle("is-hidden")}, 1500)   
        // form shows with the addition of oppacity + full classes
        nextSiblingSection.classList.toggle("is-hidden")
        nextSiblingSection.classList.toggle("opacity")
        nextSiblingSection.classList.toggle("full")

    })
})


