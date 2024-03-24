document.querySelector(".fade-layer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)



function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")


}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    document.getElementById('response').innerHTML = '<p>Thank you, ' + name + ', your message has been sent!</p>';
});
