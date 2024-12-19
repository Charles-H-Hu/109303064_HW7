let isEditing = false;

document.getElementById("edit-name-btn").addEventListener("click", () => {
    const nameElement = document.getElementById("editable-name");
    const editButton = document.getElementById("edit-name-btn");

    if (isEditing) {
        const inputField = document.querySelector("#editable-name input");
        nameElement.innerHTML = inputField.value;
        editButton.textContent = "Edit";
    } else {
        const currentName = nameElement.textContent;
        nameElement.innerHTML = `<input type="text" value="${currentName}">`;
        editButton.textContent = "Save";
    }

    isEditing = !isEditing;
});

document.getElementById("add-music-btn").addEventListener("click", () => {
    document.getElementById("music-form-modal").classList.remove("hidden");
});

document.getElementById("music-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const musicLink = document.getElementById("music-link").value;
    const musicName = document.getElementById("music-name").value;

    if (musicLink && musicName) {
        const newMusicItem = document.createElement("a");
        newMusicItem.href = musicLink;
        newMusicItem.target = "_blank";
        newMusicItem.innerHTML = `<img src="109303064_HW7_spotify_icon.png" alt="${musicName}" class="album-cover">${musicName}`;
        document.getElementById("music-list").appendChild(newMusicItem);

        document.getElementById("music-form-modal").classList.add("hidden");
        document.getElementById("music-form").reset();
    } else {
        alert("Please fill in all fields!");
    }
});

document.getElementById("cancel-form-btn").addEventListener("click", () => {
    document.getElementById("music-form-modal").classList.add("hidden");
});
