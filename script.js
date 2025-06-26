const icon = document.getElementById("light");
icon.onclick = function (){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src="image/moon.png"

    }else {
        icon.src="image/sun.png"
    }
}