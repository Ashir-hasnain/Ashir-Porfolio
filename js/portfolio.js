// porfolio

var porfolio = document.querySelector(".porfolio")

for (i = 0; i <= 3; i++) {
    for (j = 0; j <= 3; j++) {
        porfolio.innerHTML= ` 
        <div class="row">
            <div class="col-12 col-lg-4 px-0">
                <img src="asset/Images/${i}.jpg" alt="img" class="img-fluid">
            </div>
        </div>

        `
    }
    document.write('<br>')
}


