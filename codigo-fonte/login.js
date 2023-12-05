let signIn = document.getElementById("signIn");
signIn.onclick = function () {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var users = JSON.parse(localStorage.getItem('cadastros')) || [];
    var user = users.find(u => u.email === email)

    if (user && user.senha === senha) {
        location.href = 'homepage.html'
    } else {
        document.getElementById("senha").value = ""
        document.getElementById("failedMsg").style.visibility = "visible"
    }
}