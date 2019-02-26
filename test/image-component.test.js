const test = QUnit.test;

QUnit.module('image component');

function createImageTemplate(image) {
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


test('image template', function(assert) {
    //arrange
    const expected = /*html*/`
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <h2>Horns: 1</h2>
        </li>
    `;
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1
    };
    //act
    const result = createImageTemplate(image);


    //assert    
    assert.htmlEqual(result, expected);
});