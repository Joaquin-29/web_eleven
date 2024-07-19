document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: "../images/1.png", title: "Título 1", media: ["video1.mp4", "image1.jpg"] },
        { src: "../images/2.jpg", title: "Título 2", media: ["video2.mp4", "image2.jpg"] },
    ];

    const imageGrid = document.getElementById("image-grid");
    const modal = document.getElementById("modal");
    const modalMedia = document.getElementById("modal-media");
    const closeModal = document.querySelector(".close");

    images.forEach((image, index) => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;

        const titleElement = document.createElement("div");
        titleElement.classList.add("image-title");
        titleElement.textContent = image.title;

        const viewElement = document.createElement("div");
        viewElement.classList.add("image-view");
        viewElement.textContent = "<< view >>";

        imageItem.appendChild(imgElement);
        imageItem.appendChild(titleElement);
        imageItem.appendChild(viewElement);

        imageItem.addEventListener("click", () => {
            modalMedia.innerHTML = "";
            image.media.forEach(mediaSrc => {
                let mediaElement;
                if (mediaSrc.endsWith(".mp4")) {
                    mediaElement = document.createElement("video");
                    mediaElement.src = mediaSrc;
                    mediaElement.controls = true;
                } else {
                    mediaElement = document.createElement("img");
                    mediaElement.src = mediaSrc;
                }
                modalMedia.appendChild(mediaElement);
            });
            modal.style.display = "block";
        });

        imageGrid.appendChild(imageItem);
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
