function validate()
{
var username=document.getElementById("Username").value;
var password=document.getElementById("password").value;

if (username=="admin" && password=="password") {
    alert("login succesfull");
    window.location.href = "points/points.html";
    return false;
} else {
    alert("login failed");
}
}