window.addEventListener('scroll', function () {
    //Makes navigation bar visible after scrolling to bottom too
    if (document.documentElement.scrollTop == 0) {
        document.getElementById("navbar").classList.remove("scrolled");
    } else {
        document.getElementById("navbar").classList.add("scrolled");
    }
});