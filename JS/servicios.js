document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.querySelector('.search-container input[type="text"]').value;
    alert('Buscando: ' + searchValue);
});

document.getElementById('filter-button').addEventListener('click', function() {
    alert('Filtro activado');
});