const box = document.querySelectorAll(".box")

box.forEach(element => {
    element.addEventListener("click", function(e) {
        // console.log("Salam123");
        box.forEach(element => {
            if (element.classList.contains("red")) {
             element.classList.remove("red")   
            }
        });
       if (e.target.classList.contains("red")) {
            e.target.classList.remove("red");
       }
       else{
         e.target.classList.add("red");
       }
    })
});