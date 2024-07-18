AOS.init();




var nav = document.querySelector(".my-navbar-js").innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark justify-content-evenly">
<div class="container">
    <a class="navbar-brand fs-1 fw-bold" href="index.html">Ashir</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><a href="asset/Images/Icon/menu.png"></a></span>
    </button>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-bg-dark" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-bg-dark">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active px-3" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3" href="#link">Links</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3" href="#portfolio">Porfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3" href="#contact">Contact</a>
                </li>
                </ul>

                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item"  id="ld">
                    <i class="nav-link px-3 fa-solid fa-moon "></i>                    
                </li>

                </ul>
                
        </div>
    </div>
</div>
</nav>

`;



var darkLight = document.querySelector("#ld")
darkLight.onclick = function () {
        var body = document.querySelector("body");
        body.classList.toggle(".activebg");

}

var my_footer = document.querySelector(".my-footer").innerHTML = `
            <div class="row">
            <div class="col-6">
                <a class="h2 text-decoration-none" href="index.html">Portfolio</a>
            </div>
            <div class="col-6">
                <p class="fw-bold">Copyright ©2030 All rights reserved <span class="text-success">|</span> This template
                    is made by <span class="text-danger">M .Ashir Hasnain</span></p>
            </div>
            </div>
`;
var skilldata = {
    HTML: 98,
    CSS: 80,
    Bootstrape: 90,
    Javascript: 60,
    Jqruey: 90,
    Sql: 50,
    Wordpress: 90,
    Git: 70,
    PHP: 30,
    Laravel: 10,
    Python: 50,
}


var skillSection = document.querySelector(".design-skill");
let color = ''

for (const key in skilldata) {
    const element = skilldata[key];
    // console.log(element, key)
    if (element < 25) {
        color = "bg-danger"
    } else if (element < 50) {
        color = 'bg-warning'
    } else if (element < 75) {
        color = 'bg-success'
    } else {
        color = 'bg-primary'
    }
    skillSection.innerHTML += `
    <div class="row my-3" data-aos= "zoom-out-left">
    <div class="col-6">
        <h5>${key}</h5>
    </div>
    <div class="col-6">
        <div class="progress" role="progressbar" aria-label="example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar ${color} progress-bar progress-bar" style="width: ${element}%"  ></div>
        </div>
  

    </div>
</div>
    `;
}

