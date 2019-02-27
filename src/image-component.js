export function createImageTemplate(image) {
    const template = document.createElement('template');
    const html = /*html*/`
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}">
            <h2>Horns: ${image.horns}</h2>
        </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const imageList = document.getElementById('image-list');

export default function loadImage(images) {

    clearImages();

    images.forEach(image => {
        const dom = createImageTemplate(image);
        imageList.appendChild(dom);
    });
}

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}   