const previews = document.querySelectorAll(".preview")

//Adds event listener per preview
// Gives active class if clicked
//Calls function to remove active from all other previews
previews.forEach((preview) => {
    preview.addEventListener("click" , () => {
        removeActiveClasses();
        preview.classList.add("active")
    })
})

// Removes active class from all previews when called
function removeActiveClasses() {
    previews.forEach(preview => {
        preview.classList.remove("active")
    })
}