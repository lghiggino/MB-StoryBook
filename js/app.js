// Tabs navigation
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

//INSIDE THE SUBMIT BUTTONS

// Collect the checkbox checks 
// Collect the textInputs values
// Collect the textArea values



const firstDiamondButton = document.querySelector("#do-you-have-a-website-submit");
const firstCheckIdButton = document.querySelector("#firstCheckId");
const secondCheckIdButton = document.querySelector("#secondCheckId" );
const thirdCheckIdButton = document.querySelector("#thirdCheckId" );
const fourthCheckIdButton = document.querySelector("#fourthCheckId");

firstDiamondButton.addEventListener("click", () => {
   console.log(
    firstCheckIdButton.name, firstCheckIdButton.checked,
    secondCheckIdButton.name, secondCheckIdButton.checked,
    thirdCheckIdButton.name, thirdCheckIdButton.checked, 
    fourthCheckIdButton.name, fourthCheckIdButton.checked,
   ) 
})