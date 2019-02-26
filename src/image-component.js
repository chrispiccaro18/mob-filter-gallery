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

export default function loadImage(images) {
    const imageList = document.getElementById('image-list');
    images.forEach(image => {
        const dom = createImageTemplate(image);
        imageList.appendChild(dom);
    });
}