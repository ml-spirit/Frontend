//Завдання 1
const element4 = document.getElementById("element4");
const element5 = document.querySelector(".element5");

element4.addEventListener("click", function () {
    element4.classList.toggle("changed");
});

element5.addEventListener("click", function () {
    element5.classList.toggle("changed");
});

//Завдання 2
let imageWidth = 400;

function addImage() {
    const container = document.getElementById("imageContainer");

    if (!document.getElementById("cityImage")) {
        container.innerHTML = `
            <a href="https://uk.wikipedia.org/wiki/Варшава">
                <img id="cityImage" src="Warsaw.jpg" alt="Фото">
            </a>
        `;
        imageWidth = 400;
    }
}

function increaseImage() {
    const image = document.getElementById("cityImage");

    if (image) {
        imageWidth += 50;
        image.style.width = imageWidth + "px";
    }
}

function decreaseImage() {
    const image = document.getElementById("cityImage");

    if (image && imageWidth > 100) {
        imageWidth -= 50;
        image.style.width = imageWidth + "px";
    }
}

function deleteImage() {
    const container = document.getElementById("imageContainer");
    container.innerHTML = "";
}