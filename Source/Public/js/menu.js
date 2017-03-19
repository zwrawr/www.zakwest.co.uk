
function toggleNavbar(){
    console.log("clicked");
    var navbar = document.getElementById("navbar-togglable");

    //navbar.classList.toggle("toggled-closed");
    if (navbar.classList.contains("toggled-closed"))
    {
        navbar.classList.remove("toggled-closed");
        navbar.classList.add("toggled-open");
    }
    else if (navbar.classList.contains("toggled-open"))
    {
        navbar.classList.remove("toggled-open");
        navbar.classList.add("toggled-closed");
    }
    else {
        navbar.classList.add("toggled-open");
    }
}
