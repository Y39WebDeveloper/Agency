function srcollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparrent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent")
    }
}

window.onscroll = function() {
    srcollFunction();
}

window.onload = function() {
    let website = new CountUp('website-count', 0, 250, 0, 2.5)
    website.start();

    let app = new CountUp('app-count', 0, 100, 0, 2)
    app.start();

    let user = new CountUp('user-count', 0, 10000, 0, 5)
    user.start();

    let video = new CountUp('video-count', 0, 40, 0, 1)
    video.start();
}

document.getElementById("fullYear").innerHTML = new Date().getFullYear();

(function() {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();