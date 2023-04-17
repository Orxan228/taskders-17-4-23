const items = document.querySelectorAll(".list")
const delbtn = document.querySelectorAll(".delBtn")
delbtn.forEach(element => {
    element.addEventListener("click" ,function(e) {
        e.target.parentElement.remove()
    })
});