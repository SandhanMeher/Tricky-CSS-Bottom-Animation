const btn_animation = document.querySelector("[data-btn]")
btn_animation.addEventListener("click", () => {
    btn_animation.classList.add("animating")
})


function submitForm() {
    document.getElementById("form-submit").submit()
}

document.getElementById('btn-submit').onclick = function() {
    setTimeout(submitForm, 5000);
}

// var path = document.querySelector("path")
// var length = path.getTotalLength()
// console.log(length)