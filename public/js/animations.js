window.addEventListener("scroll", scrollY)
scrollY()

function scrollY(){
    // const triggerBottom = window.innerHeight / 6 * 4

    const boxes = document.querySelectorAll(".box")
    const paras = document.querySelectorAll(".para");
    const opacity = document.querySelectorAll(".opacity");
    const zoom = document.querySelectorAll(".zoom")

    //triggerBottomValue -> the smaller the value, the earlier the element is animated
    function animate(classSelector, className, triggerBottomValue = 6){
        let triggerBottom = window.innerHeight / triggerBottomValue * 4
        classSelector.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom){
                item.classList.add(className)
            } else{
                item.classList.remove(className)
            }
        })
    }

    animate(boxes, "show", 6);
    animate(paras, "show", 6);
    animate(opacity, "full", 6)
    animate(zoom, "full", 9)

}

// //inside an element scrollY
// function elementScrollY(parentElementId, childElementId){
    
//     let scrollParent = document.getElementById(parentElementId);
//     console.log(scrollParent)
//     console.log(scrollParent.getBoundingClientRect())
//     let scrollChild = document.getElementById(childElementId);
//     console.log(scrollChild.getBoundingClientRect())
//     scrollParent.addEventListener("scroll", () => {
//         const triggerBottom = scrollParent.innerHeight / 6 * 4

//         const scrollChild = scrollParent.getElementById(childElementId);
//         const scrollChildTop = scrollChild.getBoundingClientRect()
//         console.log (scrollChildTop)
//     })
    
// }

// elementScrollY("got-analytics-installed-intro", "firstCard")


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


