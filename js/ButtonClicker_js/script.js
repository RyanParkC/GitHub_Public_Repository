/* Change text to say "Logout" when clicking the "Login" button */
var click = 0
function LoginAndLogout(element) {

    if (element.innerText == "Login") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login"
    }
}

/* Remove Add Def button when it is clicked */
var click = 0
function hide(element) {
    element.remove()
}

/* Alert "Ninja was liked" when clicking a like button */
function LikeAlert(){
    alert('Ninja was liked')
}

/* Increase Likes upon pressing button */
var click = 37
function countLikes(element) {
    click++
    element.innerText = click + "likes"
}