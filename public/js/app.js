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

// Retrieving data from Firebase
// database.collection("userSubmits").get().then( (snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data())
//     })
// })


// CTA BUTTONS
const formButtons = document.querySelectorAll(".form-button")

// Modal functionalities and modal close action
const modal = document.querySelector(".modal")
const modalCloseButton = document.querySelector(".modal-close")
modalCloseButton.addEventListener("click", () => {modal.classList.remove("is-active")})
modal.addEventListener("click", () => {modal.classList.remove("is-active")})

formButtons.forEach(button => {
    //the section ID in which the button is located
    let sectionId = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    if (sectionId !== "is-site-trustworthy-submit" && sectionId !== "is-site-effective-submit"){
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let name = document.querySelector(`#${sectionId} .name`).value;
            let email = document.querySelector(`#${sectionId} .email`).value;
            let phone = document.querySelector(`#${sectionId} .phone`).value;
            let website = document.querySelector(`#${sectionId} .website`).value;
            let message = document.querySelector(`#${sectionId} .textarea`).value;
            // console.log(sectionId, name, email, phone, message);
            //send this data to firebase
            database.collection("userSubmits").add({
                "sectionId" : sectionId,
                "name" : name,
                "email" : email,
                "phone" : phone,
                "website" : website,
                "message" : message,
            })
            //modal popup
            modal.classList.add("is-active");
        })
    } else if (sectionId === "is-site-trustworthy-submit"){
        button.addEventListener("click", (e) => {
            e.preventDefault();
            //collect the checklist inputs
            let proLook = document.getElementById("proLook").checked
            let thirdParty = document.getElementById("thirdParty").checked
            let adFree = document.getElementById("adFree").checked
            let simpleContact = document.getElementById("simpleContact").checked
            let relevantContent = document.getElementById("relevantContent").checked
            let maintained = document.getElementById("maintained" ).checked
            let name = document.querySelector(`#${sectionId} .name`).value;
            let email = document.querySelector(`#${sectionId} .email`).value;
            let phone = document.querySelector(`#${sectionId} .phone`).value;
            let website = document.querySelector(`#${sectionId} .website`).value;
            let message = document.querySelector(`#${sectionId} .textarea`).value;
            // console.log(sectionId, proLook, thirdParty, adFree, simpleContact, relevantContent, maintained, name, email, phone, message);
            //send this data to firebase
            database.collection("userSubmits").add({
                "sectionId" : sectionId,
                "name" : name,
                "email" : email,
                "phone" : phone,
                "website" : website,
                "message" : message,
                "proLook": proLook,
                "thirdParty" : thirdParty,
                "adFree" : adFree,
                "simpleContact": simpleContact,
                "relevantContent" : relevantContent,
                "maintained" : maintained,
            })
             //modal popup
            modal.classList.add("is-active");
        })
    } else if (sectionId === "is-site-effective-submit"){
        button.addEventListener("click", (e) => {
            e.preventDefault();
            //collect the checklist inputs
            let easyUI = document.getElementById("easyUI").checked
            let consistentUI = document.getElementById("consistentUI").checked
            let easyUX = document.getElementById("easyUX").checked
            let seoOptimal = document.getElementById("seoOptimal").checked
            let mobileOptimal = document.getElementById("mobileOptimal").checked
            let speedOptimal = document.getElementById("speedOptimal").checked
            let name = document.querySelector(`#${sectionId} .name`).value;
            let email = document.querySelector(`#${sectionId} .email`).value;
            let phone = document.querySelector(`#${sectionId} .phone`).value;
            let website = document.querySelector(`#${sectionId} .website`).value;
            let message = document.querySelector(`#${sectionId} .textarea`).value;
            // console.log(sectionId, easyUI, consistentUI, easyUX, seoOptimal,  mobileOptimal, speedOptimal, name, email, phone, message);
            //send this data to firebase
            database.collection("userSubmits").add({
                "sectionId" : sectionId,
                "name" : name,
                "email" : email,
                "phone" : phone,
                "website" : website,
                "message" : message,
                "easyUI" : easyUI,
                "consistentUI" : consistentUI,
                "easyUX" : easyUX,
                "seoOptimal" : seoOptimal,
                "mobileOptimal" : mobileOptimal,
                "speedOptimal" : speedOptimal,
            })
             //modal popup
            modal.classList.add("is-active");
        })
    }
})