document.addEventListener("DOMContentLoaded", function () {
    
    // Select only the menu links
    const menuLinks = document.querySelectorAll(".nav-links a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'clicked-blue' from all other menu links
            menuLinks.forEach(l => l.classList.remove("clicked-blue"));
            
            // Add 'clicked-blue' only to the clicked menu item
            this.classList.add("clicked-blue");
        });
    });

});