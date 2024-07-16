AOS.init();


var skilldata = {
    HTML: 98,
    CSS: 80,
    Bootstrape: 90,
    Javascript: 60,
    Jqruey: 90,
    Python: 50,
    Wordpress: 90,
    Git: 70,
    PHP: 30,
    Laravel: 10,
}

var skillSection = document.querySelector(".design-skill");
let color = ''

for (const key in skilldata) {
    const element = skilldata[key];
    console.log(element, key)
if (element < 25) {
    color = "bg-danger"
} else if(element < 50 ){
    color = 'bg-warning'
} else if(element < 75 ){
    color = 'bg-success'
}else {
    color = 'bg-primary'
}    
    skillSection.innerHTML += `
    <div class="row my-3" data-aos= "zoom-out-left">
    <div class="col-6">
        <h5>${key}</h5>
    </div>
    <div class="col-6">
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar ${color} progress-bar-striped progress-bar-animated" style="width: ${element}%"  ></div>
        </div>
  

    </div>
</div>
    `
}


var imgSliderData = {
    img1 :' https://www.hubspot.com/hs-fs/hubfs/free-website-builder.png?width=595&height=400&name=free-website-builder.png ',
    img2 :' https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/wireframe-web-design-og.jpg ',
    img3 :' https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg ',
}

var imgSlider = document.querySelector(".img-slider");

for (const key in imgSliderData) {
        const element = imgSliderData[key];
        imgSlider.innerHTML += `
        <div class="carousel-item active">
            <img src="${element}" class="img-fluid object-fit-cover" alt="img" height="800px">
        </div>
        `
}