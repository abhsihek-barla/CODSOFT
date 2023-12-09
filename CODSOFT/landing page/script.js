// script.js

function showDramaDetails(title, genres, leadActor, leadActress) {
    const dramaInfoContainer = document.getElementById("drama-info");
    dramaInfoContainer.innerHTML = `<h2>${title}</h2>
                                   <p><strong>Genres:</strong> ${genres}</p>
                                   <p><strong>Lead Actor:</strong> ${leadActor}</p>
                                   <p><strong>Lead Actress:</strong> ${leadActress}</p>`;

    // Show the drama details section
    const dramaDetailsSection = document.getElementById("drama-details");
    dramaDetailsSection.style.display = "block";
}

function hideDramaDetails() {
    // Hide the drama details section
    const dramaDetailsSection = document.getElementById("drama-details");
    dramaDetailsSection.style.display = "none";
}
