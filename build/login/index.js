function validate()
{
var username=document.getElementById("Username").value;
var password=document.getElementById("password").value;

if (username=="admin" && password=="password") {
    alert("login succesfull");
    window.location.href = "http://example.com/new_url";
    return false;
} else {
    alert("login failed");
}
}