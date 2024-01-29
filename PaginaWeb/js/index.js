
window.onscroll = function () {
    var y = window.scrollY
    console.log(y);
    if ( y < 5) {
        document.querySelector(".header").classList.remove("scroll");
    }else {
        document.querySelector(".header").classList.remove("scroll")
    } 
}


document.querySelector('.menu').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('active');
})

document.querySelector('.content').addEventListener('click', function () {
    document.querySelector('.header').classList.remove('active');
})