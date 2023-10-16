document.querySelectorAll('.car button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === "Add to cart") {
            // Handle add to cart logic here
            alert('Added to cart!');
        } else {
            // Handle more info logic here
            alert('More info coming soon!');
        }
    });
});
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
