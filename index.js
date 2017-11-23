// Script

// Fire the function toogle when the logo is clicked 
const el = document.getElementById("logo-box").addEventListener("click", toggle);

// Toggle the visiblity of the facebook logo and the name
function toggle() {
    document.getElementById("logo").classList.toggle("hide");
    document.getElementById("name").classList.toggle("visible");
}
