function myFunction() {
    document.getElementById("navbar").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("navbar");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// window.addEventListener('resize', showBig ()) 
//     if (window.innerwidth > 650) {
//         const navigation = document.getElementById("navbar");
//         navigation.classList.add("show");
//     };