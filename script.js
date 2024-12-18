function showDescription(imageElement) {
    // Find the description paragraph associated with the clicked image
    const description = imageElement.nextElementSibling.nextElementSibling;

    // Toggle visibility of the description
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
