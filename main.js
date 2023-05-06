signup = document.querySelector(`.signup`),
    sgbtn = document.getElementById(`sgbtn`);
baqla = document.getElementById(`baqla`)


sgbtn.addEventListener(`click`, function () {
    signup.style.display = `flex`;
})
baqla.addEventListener(`click`, function () {
    signup.style.display = `none`;

})


console.log("Salam");
window.addEventListener("scroll", function () {
    let nvb = document.querySelector(".nvb");
    if(window.scrollY > 50){
        nvb.classList.add("sticky");
    }else{
        nvb.classList.remove("sticky");
    }
})