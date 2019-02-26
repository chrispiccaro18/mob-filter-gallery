const test = QUnit.test;

QUnit.module('filter component');

const images = [
    { title: 'image one', keyword: 'blue', horns: 1 },
    { title: 'image two', keyword: 'blue', horns: 2 },
    { title: 'image three', keyword: 'red', horns: 2 }
];

function filterImages(filter, images) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns === filter.horns;

        return hasKeyword && hasHorns;
    });
}

test('filter by keyword', function(assert) {
    //arrange
    const filter = {
        keyword: 'blue'
    };
    const expected = [
        { title: 'image one', keyword: 'blue', horns: 1 },
        { title: 'image two', keyword: 'blue', horns: 2 }
    ];
    //act
    const result = filterImages(filter, images);

    //assert
    assert.deepEqual(result, expected);
});

test('no keyword filter returns all images', assert => {
    //arrange
    const filter = {
        keyword: ''
    };
    const expected = images;
    //act
    const result = filterImages(filter, images);
    //assert
    assert.deepEqual(result, expected);
});

test('filter by horns', function(assert) {
    //arrange
    const filter = {
        horns: 2
    };
    const expected = [
        { title: 'image two', keyword: 'blue', horns: 2 },
        { title: 'image three', keyword: 'red', horns: 2 }
    ];
    //act
    const result = filterImages(filter, images);

    //assert
    assert.deepEqual(result, expected);
});