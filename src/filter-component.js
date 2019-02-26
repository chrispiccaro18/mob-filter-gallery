const filterForm = document.getElementById('filter-form');

export function loadFilters(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formDaddy = new FormData(filterForm);
        
        const horns = parseInt(formDaddy.get('horns-filter'));
        
        const filter = {
            keyword: formDaddy.get('keyword-filter'),
            horns: horns
        };
        callback(filter);
    });
}

