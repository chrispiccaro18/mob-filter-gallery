import loadImage from './image-component.js';
import images from '../data/images.js';

import './filter-component.js';
import loadFilters from './filter-component.js';
import filterImages from './filter-images.js';

loadImage(images);
loadFilters(filter => {
    const filtered = filterImages(filter, images);
    loadImage(filtered);
});