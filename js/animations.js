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



console.log("Red Arrows are on")

const redArrows = document.querySelectorAll(".left-arrow")

redArrows.forEach(arrow => {
    //anymation event
    arrow.addEventListener("click", () => {
        console.log(arrow)
        // let nextSiblingForm = arrow.parentElement.nextSibling.nextElementSibling.firstElementChild
        // nextSiblingForm.classList.toggle("is-hidden")
    })


   
})


