const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        const carName = car.querySelector('h2').innerText.toLowerCase();
        if (carName.includes(query)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
});