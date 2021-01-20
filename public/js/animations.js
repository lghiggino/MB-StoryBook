window.addEventListener("scroll", scrollY)
scrollY()

function scrollY(){
    const triggerBottom = window.innerHeight / 6 * 4;

    const boxes = document.querySelectorAll(".box")
    const paras = document.querySelectorAll(".para");
    const opacity = document.querySelectorAll(".opacity");

    function animate(classSelector, className){
        classSelector.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom){
                item.classList.add(className)
            } else{
                item.classList.remove(className)
            }
        })
    }

    animate(boxes, "show");
    animate(paras, "show");
    animate(opacity, "full")
}

// const allSections = document.querySelectorAll("section")
//     allSections.forEach(section => {
//         console.log(section.getBoundingClientRect())
//     })

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


